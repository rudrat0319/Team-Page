from fastapi import FastAPI, HTTPException, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
import crud
from database import engine, get_db, SessionLocal
from seed_data import SEED_MEMBERS

# ── App Init ──────────────────────────────────────────────────────────────────

app = FastAPI(
    title="Armatrix Team API",
    description=(
        "REST API for managing Armatrix's team member directory.\n\n"
        "Use the endpoints below to **GET**, **POST**, **PUT**, or **DELETE** "
        "team members. No authentication is required — this is intentional for "
        "demo purposes.\n\n"
        "The database is pre-seeded with fictional Armatrix team members on first "
        "run. Re-seeding only happens when the table is empty."
    ),
    version="1.0.0",
    contact={
        "name": "Armatrix Engineering",
        "url": "https://armatrix.in",
        "email": "engineering@armatrix.in",
    },
)

# ── CORS ──────────────────────────────────────────────────────────────────────
# Allow all origins in development. In production, replace "*" with your
# Vercel deployment URL, e.g. "https://armatrix-team.vercel.app"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # ← Replace with Vercel URL before going live
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Database Bootstrap ────────────────────────────────────────────────────────

def seed_db():
    """
    Pre-populate the DB with fictional team members on first boot.
    Skips seeding if records already exist so re-deploys don't duplicate data.
    """
    db: Session = SessionLocal()
    try:
        if crud.count_members(db) == 0:
            for member_data in SEED_MEMBERS:
                db_member = models.TeamMember(**member_data)
                db.add(db_member)
            db.commit()
            print(f"✅ Seeded {len(SEED_MEMBERS)} team members into the database.")
        else:
            print("ℹ️  Database already contains team members — skipping seed.")
    finally:
        db.close()


@app.on_event("startup")
def on_startup():
    """Create all tables and seed data when the app starts."""
    models.Base.metadata.create_all(bind=engine)
    seed_db()


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/", tags=["Health"])
def root():
    """Health-check / root endpoint."""
    return {
        "service": "Armatrix Team API",
        "status": "online",
        "docs": "/docs",
    }


@app.get(
    "/team",
    response_model=schemas.TeamMemberListResponse,
    tags=["Team Members"],
    summary="List all team members",
    description=(
        "Returns a paginated list of all Armatrix team members, ordered by "
        "creation date (newest first). Use `skip` and `limit` for pagination."
    ),
)
def list_members(
    skip: int = Query(default=0, ge=0, description="Number of records to skip"),
    limit: int = Query(default=100, ge=1, le=200, description="Max records to return"),
    db: Session = Depends(get_db),
):
    members = crud.get_members(db, skip=skip, limit=limit)
    total = crud.count_members(db)
    return {"total": total, "members": members}



@app.post(
    "/team",
    response_model=schemas.TeamMemberResponse,
    status_code=201,
    tags=["Team Members"],
    summary="Add a new team member",
    description=(
        "Creates a new team member record. "
        "Required fields: `name`, `designation`, `bio`. "
        "Optional fields: `picture`, `linkedin`, `x_account`, `company_email`."
    ),
)
def create_member(
    member_data: schemas.TeamMemberCreate,
    db: Session = Depends(get_db),
):
    return crud.create_member(db, member_data)


@app.put(
    "/team/{member_id}",
    response_model=schemas.TeamMemberResponse,
    tags=["Team Members"],
    summary="Update a team member",
    description=(
        "Partially updates an existing team member. "
        "Send only the fields you want to change — omitted fields are left untouched. "
        "This endpoint follows PATCH semantics despite using PUT for simplicity."
    ),
)
def update_member(
    member_id: int,
    update_data: schemas.TeamMemberUpdate,
    db: Session = Depends(get_db),
):
    updated = crud.update_member(db, member_id, update_data)
    if not updated:
        raise HTTPException(status_code=404, detail=f"Team member with id={member_id} not found.")
    return updated


@app.delete(
    "/team/{member_id}",
    status_code=204,
    tags=["Team Members"],
    summary="Delete a team member",
    description="Permanently removes a team member from the database.",
)
def delete_member(member_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_member(db, member_id)
    if not deleted:
        raise HTTPException(status_code=404, detail=f"Team member with id={member_id} not found.")
    # 204 No Content — return nothing
    return None
