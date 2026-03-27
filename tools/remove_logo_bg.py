#!/usr/bin/env python3
from __future__ import annotations

import argparse
import math
import os
from dataclasses import dataclass
from typing import Iterable, Tuple

from PIL import Image


@dataclass(frozen=True)
class BgModel:
    r: float
    g: float
    b: float
    max_corner_dist: float


def _clamp01(x: float) -> float:
    return 0.0 if x < 0.0 else 1.0 if x > 1.0 else x


def _srgb_channel_to_float(v: int) -> float:
    return v / 255.0


def _float_to_srgb_channel(v: float) -> int:
    v = 0.0 if v < 0.0 else 1.0 if v > 1.0 else v
    return int(round(v * 255.0))


def _dist_rgb(a: Tuple[int, int, int], b: Tuple[float, float, float]) -> float:
    dr = a[0] - b[0]
    dg = a[1] - b[1]
    db = a[2] - b[2]
    return math.sqrt(dr * dr + dg * dg + db * db)


def _avg_rgb(pixels: Iterable[Tuple[int, int, int]]) -> Tuple[float, float, float]:
    rs: float = 0.0
    gs: float = 0.0
    bs: float = 0.0
    n: int = 0
    for r, g, b in pixels:
        rs += r
        gs += g
        bs += b
        n += 1
    if n == 0:
        return (0.0, 0.0, 0.0)
    return (rs / n, gs / n, bs / n)


def _corner_samples_rgb(img: Image.Image, sample: int) -> list[Tuple[int, int, int]]:
    w, h = img.size
    s = max(1, min(sample, w, h))
    px = img.convert("RGB").load()
    out: list[Tuple[int, int, int]] = []

    def add_block(x0: int, y0: int) -> None:
        for y in range(y0, y0 + s):
            for x in range(x0, x0 + s):
                out.append(px[x, y])

    add_block(0, 0)
    add_block(w - s, 0)
    add_block(0, h - s)
    add_block(w - s, h - s)
    return out


def _fit_bg_model(img: Image.Image, corner_sample: int) -> BgModel:
    corners = _corner_samples_rgb(img, corner_sample)
    bg = _avg_rgb(corners)
    max_dist = 0.0
    for p in corners:
        max_dist = max(max_dist, _dist_rgb(p, bg))
    return BgModel(r=bg[0], g=bg[1], b=bg[2], max_corner_dist=max_dist)


def _smoothstep(edge0: float, edge1: float, x: float) -> float:
    if edge0 == edge1:
        return 1.0 if x >= edge1 else 0.0
    t = _clamp01((x - edge0) / (edge1 - edge0))
    return t * t * (3.0 - 2.0 * t)


def remove_background(
    img: Image.Image,
    *,
    corner_sample: int = 12,
    transition: float = 32.0,
    extra_bias: float = 2.0,
    decontaminate: bool = True,
) -> Image.Image:
    """
    Removes a mostly-solid background by modeling the background color from corners.
    Produces an RGBA image with a soft alpha transition at the edges.
    """
    bg = _fit_bg_model(img, corner_sample)
    rgb = img.convert("RGB")
    w, h = rgb.size
    src = rgb.load()

    # Thresholds are based on how much variation exists in the corners.
    t0 = bg.max_corner_dist + extra_bias
    t1 = t0 + transition

    out = Image.new("RGBA", (w, h))
    dst = out.load()

    bg_rgb = (bg.r, bg.g, bg.b)
    for y in range(h):
        for x in range(w):
            r, g, b = src[x, y]
            d = _dist_rgb((r, g, b), bg_rgb)
            a = _smoothstep(t0, t1, d)
            if a <= 0.0:
                dst[x, y] = (0, 0, 0, 0)
                continue

            if decontaminate and a < 1.0:
                # Reverse "matte" blending to reduce halos:
                # observed = fg*a + bg*(1-a) => fg = (observed - bg*(1-a)) / a
                fr = (r - bg.r * (1.0 - a)) / a
                fg = (g - bg.g * (1.0 - a)) / a
                fb = (b - bg.b * (1.0 - a)) / a
                r2 = int(round(fr))
                g2 = int(round(fg))
                b2 = int(round(fb))
            else:
                r2, g2, b2 = r, g, b

            # Clamp
            r2 = 0 if r2 < 0 else 255 if r2 > 255 else r2
            g2 = 0 if g2 < 0 else 255 if g2 > 255 else g2
            b2 = 0 if b2 < 0 else 255 if b2 > 255 else b2

            dst[x, y] = (r2, g2, b2, int(round(a * 255.0)))
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description="Remove solid-ish background from a logo PNG.")
    ap.add_argument("input", help="Path to input image (PNG recommended).")
    ap.add_argument(
        "--inplace",
        action="store_true",
        help="Overwrite input file (creates .bak first).",
    )
    ap.add_argument("--output", help="Output path (ignored with --inplace).")
    ap.add_argument("--corner-sample", type=int, default=12, help="Corner sample block size.")
    ap.add_argument("--transition", type=float, default=32.0, help="Edge transition width.")
    ap.add_argument("--extra-bias", type=float, default=2.0, help="Extra bias above corner variance.")
    ap.add_argument("--no-decontaminate", action="store_true", help="Disable edge decontamination.")
    args = ap.parse_args()

    inp = args.input
    img = Image.open(inp)
    out = remove_background(
        img,
        corner_sample=args.corner_sample,
        transition=args.transition,
        extra_bias=args.extra_bias,
        decontaminate=not args.no_decontaminate,
    )

    if args.inplace:
        bak = inp + ".bak"
        if not os.path.exists(bak):
            with open(inp, "rb") as fsrc, open(bak, "wb") as fdst:
                fdst.write(fsrc.read())
        out.save(inp, format="PNG")
        return 0

    out_path = args.output
    if not out_path:
        root, _ext = os.path.splitext(inp)
        out_path = root + "-transparent.png"
    out.save(out_path, format="PNG")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
