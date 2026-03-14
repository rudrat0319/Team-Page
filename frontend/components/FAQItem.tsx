"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`faq-chevron${open ? " faq-chevron--open" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown open={open} />
      </button>
      <div
        className="faq-answer"
        style={{
          maxHeight: open ? "500px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
}
