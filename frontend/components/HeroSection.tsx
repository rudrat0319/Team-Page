import LightRays from "./LightRays";

export default function HeroSection() {
  return (
    <LightRays rayCount={16} speed={3} spreadDeg={80}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "160px",
          paddingBottom: "80px",
          minHeight: "520px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            fontFamily: "var(--font-display), var(--font-sans)",
          }}
        >
          The Minds Behind Armatrix
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "var(--text-secondary)",
            maxWidth: "560px",
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          We&apos;re a team of Builders, Engineers, Designers, and Researchers
          building the next layer of robotics infrastructure.
        </p>

        <a
          href="https://armatrix.in#contact"
          className="btn-get-in-touch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn-get-in-touch-inner">Get in Touch</span>
        </a>
      </section>
    </LightRays>
  );
}
