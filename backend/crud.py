from sqlalchemy.orm import Session
from sqlalchemy import desc
from typing import Optional

import models
import schemas


# ── Read ──────────────────────────────────────────────────────────────────────

def get_member(db: Session, member_id: int) -> Optional[models.TeamMember]:
    return db.query(models.TeamMember).filter(models.TeamMember.id == member_id).first()


def get_members(db: Session, skip: int = 0, limit: int = 100) -> list[models.TeamMember]:
    
    return (
        db.query(models.TeamMember)
        .order_by(desc(models.TeamMember.created_at))
        .offset(skip)
        .limit(limit)
        .all()
    )


def count_members(db: Session) -> int:
    return db.query(models.TeamMember).count()


# ── Create ────────────────────────────────────────────────────────────────────

def create_member(db: Session, member_data: schemas.TeamMemberCreate) -> models.TeamMember:
   
    db_member = models.TeamMember(**member_data.model_dump())
    db.add(db_member)
    db.commit()
    db.refresh(db_member)
    return db_member


# ── Update ────────────────────────────────────────────────────────────────────

def update_member(
    db: Session,
    member_id: int,
    update_data: schemas.TeamMemberUpdate,
) -> Optional[models.TeamMember]:
    
    db_member = get_member(db, member_id)
    if not db_member:
        return None

    # model_dump(exclude_unset=True) returns only fields the client actually sent
    update_fields = update_data.model_dump(exclude_unset=True)
    for field, value in update_fields.items():
        setattr(db_member, field, value)

    db.commit()
    db.refresh(db_member)
    return db_member


# ── Delete ────────────────────────────────────────────────────────────────────

def delete_member(db: Session, member_id: int) -> bool:
    
    db_member = get_member(db, member_id)
    if not db_member:
        return False

    db.delete(db_member)
    db.commit()
    return True