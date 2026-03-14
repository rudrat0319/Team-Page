"""
seed_data.py
Fictional Armatrix team members used to pre-populate the DB on first run.
Photos reference professional-looking Unsplash portraits (free, no auth required).
"""

SEED_MEMBERS = [
    {
        "name": "Aryan Mehta",
        "designation": "Co-Founder & CEO",
        "bio": (
            "Aryan founded Armatrix with the conviction that great software is "
            "indistinguishable from craft. With a background in systems engineering "
            "and a previous exit under his belt, he obsesses over product direction, "
            "hiring, and the occasional late-night deploy."
        ),
        "picture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        "linkedin": "https://linkedin.com/in/aryanmehta",
        "x_account": "https://x.com/aryanmehta",
        "company_email": "aryan@armatrix.in",
    },
    {
        "name": "Priya Nair",
        "designation": "Co-Founder & CTO",
        "bio": (
            "Priya leads Armatrix's engineering organisation and sets the technical "
            "vision. Ex-Google SWE III, she brought a love for distributed systems "
            "and a zero-tolerance policy for flaky tests. When not reviewing PRs she "
            "is mentoring junior developers and writing long-form posts on Substack."
        ),
        "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
        "linkedin": "https://linkedin.com/in/priyanair",
        "x_account": "https://x.com/priyanair_dev",
        "company_email": "priya@armatrix.in",
    },
    {
        "name": "Kabir Johansson",
        "designation": "Head of Design",
        "bio": (
            "Kabir bridges the gap between pixels and purpose. A graduate of NID "
            "Ahmedabad, he has shipped design systems for fintech and healthtech "
            "startups across Europe and India. At Armatrix he owns the end-to-end "
            "experience from brand identity to interaction design."
        ),
        "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        "linkedin": "https://linkedin.com/in/kabirjohansson",
        "x_account": "https://x.com/kabirdesigns",
        "company_email": "kabir@armatrix.in",
    },
    {
        "name": "Sneha Rajan",
        "designation": "Senior Backend Engineer",
        "bio": (
            "Sneha architects the invisible plumbing that keeps Armatrix's products "
            "fast and reliable. She contributed to open-source Rust projects before "
            "joining and is on a personal quest to eliminate every N+1 query in "
            "production. Favourite weekend activity: CTFs."
        ),
        "picture": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        "linkedin": "https://linkedin.com/in/sneharajan",
        "x_account": "https://x.com/sneharajan_eng",
        "company_email": "sneha@armatrix.in",
    },
    {
        "name": "Dev Kapoor",
        "designation": "Frontend Engineer",
        "bio": (
            "Dev turns Figma files into pixel-perfect, accessible React components "
            "at an alarming speed. He is the unofficial keeper of Armatrix's design "
            "token library and has strong opinions about animation curves. Ask him "
            "about Web Vitals and prepare for a 20-minute monologue."
        ),
        "picture": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        "linkedin": "https://linkedin.com/in/devkapoor",
        "x_account": "https://x.com/devkapoor_ui",
        "company_email": "dev@armatrix.in",
    },
    {
        "name": "Aisha Okonkwo",
        "designation": "Product Manager",
        "bio": (
            "Aisha translates customer chaos into ordered backlogs. She spent three "
            "years in product at a Series B SaaS before joining Armatrix, and she "
            "brings a rigorous user-research practice that keeps the team building "
            "the right things. She runs a weekly PM community of practice in Bangalore."
        ),
        "picture": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
        "linkedin": "https://linkedin.com/in/aishaokonkwo",
        "x_account": "https://x.com/aisha_pm",
        "company_email": "aisha@armatrix.in",
    },
    {
        "name": "Rohan Pillai",
        "designation": "DevOps & Infrastructure Engineer",
        "bio": (
            "Rohan keeps the lights on — literally. He designed Armatrix's "
            "multi-region Kubernetes setup and can recite YAML from memory. His "
            "on-call rotation has a sub-5-minute MTTR and he is working toward "
            "making it sub-2. Outside work, he volunteers at a robotics club for "
            "school students."
        ),
        "picture": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
        "linkedin": "https://linkedin.com/in/rohanpillai",
        "x_account": "https://x.com/rohanpillai_ops",
        "company_email": "rohan@armatrix.in",
    },
    {
        "name": "Meera Iyer",
        "designation": "Data Engineer",
        "bio": (
            "Meera builds the pipelines that turn raw telemetry into insights the "
            "product team can actually act on. She has a master's in Statistics from "
            "IISc and is happiest when SQL queries run in under a second. Her "
            "dashboard templates are quietly used by three other startups."
        ),
        "picture": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
        "linkedin": "https://linkedin.com/in/meeraiyer",
        "x_account": "https://x.com/meeraiyer_data",
        "company_email": "meera@armatrix.in",
    },
]