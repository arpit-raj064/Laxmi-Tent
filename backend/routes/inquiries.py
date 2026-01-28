from fastapi import APIRouter, HTTPException
from ..models import Inquiry, InquiryCreate
from ..database import db
import logging

logger = logging.getLogger(__name__)
inquiries_router = APIRouter()


@inquiries_router.post("/inquiries", response_model=dict)
async def create_inquiry(inquiry_input: InquiryCreate):
    try:
        # Create inquiry object
        inquiry_obj = Inquiry(**inquiry_input.model_dump())
        
        # Insert into database
        result = await db.inquiries.insert_one(inquiry_obj.model_dump())
        
        logger.info(f"New inquiry created: {inquiry_obj.id}")
        
        return {
            "success": True,
            "message": "Your inquiry has been submitted successfully! We will contact you soon.",
            "inquiryId": inquiry_obj.id
        }
    except Exception as e:
        logger.error(f"Error creating inquiry: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit inquiry. Please try again.")


@inquiries_router.get("/inquiries")
async def get_all_inquiries():
    """Admin endpoint to view all inquiries"""
    try:
        inquiries = await db.inquiries.find().sort("createdAt", -1).to_list(1000)
        return {"success": True, "inquiries": inquiries}
    except Exception as e:
        logger.error(f"Error fetching inquiries: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch inquiries")
