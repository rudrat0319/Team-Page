from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from database import Base


class TeamMember(Base):
    
    __tablename__ = "team_members"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    designation = Column(String(100), nullable=False)
    bio = Column(Text, nullable=False)
    picture = Column(String(500), nullable=True) 
    linkedin = Column(String(300), nullable=True)
    x_account = Column(String(300), nullable=True)
    company_email = Column(String(150), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())