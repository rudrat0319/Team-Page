"use client";

import FAQItem from "./FAQItem";

const FAQ_DATA = [
  {
    question:
      "What industries can Armatrix's robotic arm be used in?",
    answer:
      "Armatrix's snake-like robotic arm is built for any environment where access is tight or conditions are hazardous. Current use cases include visual inspection, painting, and welding — making it relevant for industries like oil & gas, aerospace, manufacturing, and infrastructure maintenance.",
  },
  {
    question:
      "What makes Armatrix's arm different from a conventional robotic arm?",
    answer:
      "Unlike traditional robotic arms that operate in open, structured spaces, Armatrix's arm is hyper-redundant and snake-like — meaning it can navigate through confined and complex machinery. It also features an external actuation system for safe use in dangerous environments and a modular end effector, so the same arm can switch between inspection cameras, welding tools, and painting equipment.",
  },
  {
    question:
      "Is Armatrix an early-stage company or do they have a working product?",
    answer:
      "Armatrix is past the prototype stage. As of late 2025, they completed MVP 01 — a 3-metre advanced robotic arm — and have closed a $2.1 million pre-seed round led by pi Ventures. They are also backed by Shell E4, Emergent Ventures, Boost VC, and several other investors, and have been building since their incorporation in January 2024.",
  },
];

export default function FAQSection() {
  return (
    <section
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "40px 24px 60px",
      }}
    >
      <h2
        className="section-title"
        style={{ marginBottom: "32px" }}
      >
        Frequently Asked Questions
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {FAQ_DATA.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
