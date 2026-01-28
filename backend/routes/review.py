from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid
from fastapi import APIRouter

reviews_router = APIRouter()

@reviews_router.get("/")
async def get_reviews():
    return {"message": "Reviews working"}


# Contact Inquiry Models
class InquiryCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    eventType: str
    customEventType: Optional[str] = None
    eventDate: Optional[str] = None
    message: str


class Inquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    eventType: str
    customEventType: Optional[str] = None
    eventDate: Optional[str] = None
    message: str
    status: str = "pending"
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)


# Review/Testimonial Models
class ReviewCreate(BaseModel):
    name: str
    event: str
    rating: int  # 1-5
    comment: str
    phone: Optional[str] = None


class Review(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    event: str
    rating: int
    comment: str
    phone: Optional[str] = None
    status: str = "pending"  # pending, approved, rejected
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)
