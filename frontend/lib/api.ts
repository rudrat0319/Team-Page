/* ── Armatrix Team API Client ───────────────────────────── */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  bio: string;
  picture: string | null;
  linkedin: string | null;
  x_account: string | null;
  company_email: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface TeamMemberListResponse {
  total: number;
  members: TeamMember[];
}

/**
 * Fetch all team members from the API.
 * Falls back to an empty array on error so the page still renders.
 */
export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team`, {
      next: { revalidate: 60 }, // ISR — refresh every 60 s
    });

    if (!res.ok) {
      console.error(`API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const data: TeamMemberListResponse = await res.json();
    return data.members;
  } catch (err) {
    console.error("Failed to fetch team members:", err);
    return [];
  }
}
