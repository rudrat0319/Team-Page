import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import TeamCard from "@/components/TeamCard";
import FAQSection from "../components/FAQSection";
import Footer from "@/components/Footer";
import { fetchTeamMembers } from "@/lib/api";

export default async function TeamPage() {
  const members = await fetchTeamMembers();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Team Grid ────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {members.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "16px",
              padding: "60px 0",
            }}
          >
            No team members found. Start the backend API to load data.
          </p>
        )}
      </section>

      {/* ── FAQs ─────────────────────────────────────────── */}
      <FAQSection />

      {/* ── Footer ───────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
