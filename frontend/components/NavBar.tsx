"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
      }}
    >
      {/* Armatrix Logo */}
      <Link href="https://armatrix.in" aria-label="Armatrix Home" className="logo-hover">
        <Image
          src="/armatrix-logo.png"
          alt="Armatrix"
          width={52}
          height={40}
          style={{
            mixBlendMode: "screen",
            objectFit: "contain",
          }}
          priority
        />
      </Link>

      {/* Nav Pill */}
      <nav className="nav-pill">
        <Link
          href="https://armatrix.in/careers"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Careers
        </Link>
        <Link
          href="https://armatrix.in/blog"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </Link>
        <Link
          href="https://armatrix.in#contact"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
