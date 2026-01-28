from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
from .database import db

# Load env FIRST
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# MongoDB connection
mongo_url = os.getenv("MONGO_URL");
db_name = os.getenv("DB_NAME")

print("MONGO_URL:", mongo_url)
print("DB_NAME:", db_name)

if not mongo_url or not db_name:
    raise ValueError("MONGO_URL or DB_NAME not set")

# client = AsyncIOMotorClient(mongo_url)
# db = client[db_name]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Import and include route modules
from .routes.review import reviews_router 
from .routes.inquiries import inquiries_router

api_router.include_router(inquiries_router, tags=["inquiries"])
api_router.include_router(reviews_router, tags=["reviews"])

# Include the router in the main app
app.include_router(api_router)


# print("MONGO_URL:", mongo_url)
# print("DB_NAME:", db_name)

# ROOT_DIR = Path(__file__).parent
# load_dotenv(ROOT_DIR / ".env")

# mongo_url = os.getenv("MONGO_URL")
# db_name = os.getenv("DB_NAME")

# if not mongo_url or not db_name:
#     raise ValueError("MONGO_URL or DB_NAME not set")

# client = AsyncIOMotorClient(mongo_url)
# db = client[db_name]