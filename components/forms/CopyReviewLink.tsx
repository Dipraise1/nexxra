'use client';

import { useState } from 'react';

const REVIEW_URL = 'https://www.nexxradigitals.com/review';

/** "Copy review link" pill — the team pastes this to clients after a project. */
export default function CopyReviewLink({ className = 'btn-ghost' }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(REVIEW_URL);
    } catch {
      window.prompt('Copy this review link:', REVIEW_URL);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={copy} className={className} aria-live="polite">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {copied
          ? <polyline points="20 6 9 17 4 12" />
          : <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>}
      </svg>
      {copied ? 'Link copied!' : 'Copy review link'}
    </button>
  );
}
