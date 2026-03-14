import Image from "next/image";
import type { TeamMember } from "@/lib/api";

/* ── Inline SVG Icons ────────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

/* ── Team Card Component ─────────────────────────────────── */

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="team-card" style={{ padding: "16px" }}>
      {/* Photo */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          borderRadius: "14px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.04)",
          marginBottom: "16px",
        }}
      >
        {member.picture ? (
          <Image
            src={member.picture}
            alt={member.name}
            width={400}
            height={400}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              color: "var(--text-muted)",
            }}
          >
            {member.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Name & Designation */}
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 700,
          marginBottom: "2px",
          color: "var(--text-primary)",
        }}
      >
        {member.name}
      </h3>
      <p
        style={{
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--accent-pink)",
          marginBottom: "10px",
        }}
      >
        {member.designation}
      </p>

      {/* Social Links Row */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginBottom: "12px",
        }}
      >
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={`${member.name} LinkedIn`}
          >
            <LinkedInIcon />
          </a>
        )}
        {member.x_account && (
          <a
            href={member.x_account}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={`${member.name} X profile`}
          >
            <XIcon />
          </a>
        )}
        {member.company_email && (
          <a
            href={`mailto:${member.company_email}`}
            className="social-icon"
            aria-label={`Email ${member.name}`}
          >
            <EmailIcon />
          </a>
        )}
      </div>

      {/* Bio */}
      <p
        style={{
          fontSize: "13px",
          lineHeight: 1.6,
          color: "var(--text-secondary)",
        }}
      >
        {member.bio}
      </p>
    </article>
  );
}
