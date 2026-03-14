import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-footer)",
        padding: "48px 40px 40px",
        borderRadius: "24px 24px 0 0",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "40px",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        {/* Left Column – Address & Logo */}
        <div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--text-footer)",
              marginBottom: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Our Office:
          </p>
          <address
            style={{
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "#4B5563",
              marginBottom: "28px",
            }}
          >
            4th Floor, 444 Jai Tower
            <br />
            Sri Balaji Krupa Layout
            <br />
            RK Hegde Nagar
            <br />
            Bengaluru – 560077
          </address>

          {/* Armatrix Logo */}
          <Link href="https://armatrix.in" aria-label="Armatrix Home">
            <Image
              src="/armatrix-logo.png"
              alt="Armatrix"
              width={52}
              height={40}
              style={{
                filter: "invert(1)",
                mixBlendMode: "multiply",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>

        {/* Right Column – Nav Links */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            textAlign: "right",
          }}
        >
          <Link
            href="https://armatrix.in/blog"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blogs
          </Link>
          <Link
            href="https://armatrix.in#contact"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
          <Link
            href="https://armatrix.in/careers"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Careers
          </Link>
          <Link
            href="https://armatrix.in"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </Link>
        </nav>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid nav {
            text-align: left !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 12px 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
