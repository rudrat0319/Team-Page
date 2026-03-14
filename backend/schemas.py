from pydantic import BaseModel, EmailStr, HttpUrl, Field
from typing import Optional
from datetime import datetime


class TeamMemberBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, example="Riya Sharma")
    designation: str = Field(..., min_length=1, max_length=100, example="Lead Engineer")
    bio: str = Field(..., min_length=1, example="Riya architects backend systems and loves distributed computing.")
    picture: Optional[str] = Field(
        None,
        example="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    )
    linkedin: Optional[str] = Field(None, example="https://linkedin.com/in/riyasharma")
    x_account: Optional[str] = Field(None, example="https://x.com/riyasharma")
    company_email: Optional[str] = Field(None, example="riya@armatrix.in")


class TeamMemberCreate(TeamMemberBase):
    pass


class TeamMemberUpdate(BaseModel):
    
    name: Optional[str] = Field(None, min_length=1, max_length=100)
    designation: Optional[str] = Field(None, min_length=1, max_length=100)
    bio: Optional[str] = Field(None, min_length=1)
    picture: Optional[str] = None
    linkedin: Optional[str] = None
    x_account: Optional[str] = None
    company_email: Optional[str] = None


class TeamMemberResponse(TeamMemberBase):
    
    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class TeamMemberListResponse(BaseModel):
    total: int
    members: list[TeamMemberResponse]