import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nexxra Digital — Web Development Company in Abuja, Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050814",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: 0, right: 0,
            width: "500px", height: "500px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0,
            width: "400px", height: "400px",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            position: "absolute",
            top: "72px", left: "80px",
            width: "60px", height: "60px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "800",
            color: "white",
          }}
        >
          N
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "16px",
              color: "rgba(240,244,255,0.4)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Abuja, Nigeria · CAC Registered
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#f0f4ff",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            We build digital
            <br />
            <span style={{ color: "rgba(240,244,255,0.35)", fontStyle: "italic", fontWeight: "400" }}>
              products.
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(240,244,255,0.45)",
              maxWidth: "640px",
              lineHeight: 1.5,
            }}
          >
            Websites · Mobile Apps · SaaS · Business Automation
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
