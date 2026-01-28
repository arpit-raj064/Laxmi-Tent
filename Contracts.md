"# API Contracts for Laxmi Tent House Landing Page

## Backend Implementation Plan

### 1. Contact Form API

**Endpoint:** `POST /api/inquiries`

**Request Body:**
```json
{
  \"name\": \"string (required)\",
  \"phone\": \"string (required)\",
  \"email\": \"string (optional)\",
  \"eventType\": \"string (required)\",
  \"customEventType\": \"string (optional, required if eventType is 'other')\",
  \"eventDate\": \"string (optional)\",
  \"message\": \"string (required)\"
}
```

**Response:**
```json
{
  \"success\": true,
  \"message\": \"Your inquiry has been submitted successfully!\",
  \"inquiryId\": \"string\"
}
```

**MongoDB Model:** `Inquiry`
- name: String
- phone: String
- email: String
- eventType: String
- customEventType: String
- eventDate: Date
- message: String
- status: String (default: \"pending\")
- createdAt: Date
- updatedAt: Date

---

### 2. Reviews/Testimonials API

**Endpoint:** `GET /api/reviews`
- Fetch all approved reviews
- Returns array of review objects

**Endpoint:** `POST /api/reviews`
- Submit a new customer review
- Review will be marked as \"pending\" for admin approval

**Request Body:**
```json
{
  \"name\": \"string (required)\",
  \"event\": \"string (required)\",
  \"rating\": \"number (1-5, required)\",
  \"comment\": \"string (required)\",
  \"phone\": \"string (optional, for verification)\"
}
```

**Response:**
```json
{
  \"success\": true,
  \"message\": \"Thank you for your review! It will be published after verification.\"
}
```

**MongoDB Model:** `Review`
- name: String
- event: String
- rating: Number (1-5)
- comment: String
- phone: String
- status: String (default: \"pending\", can be \"approved\" or \"rejected\")
- createdAt: Date
- updatedAt: Date

---

## Frontend Changes

### Contact.jsx
- **Remove:** Mock submission logic
- **Add:** Axios POST call to `/api/inquiries`
- **Update:** Error handling and success messages

### Testimonials.jsx
- **Remove:** Import from mockData.js
- **Add:** useEffect to fetch reviews from `/api/reviews`
- **Add:** \"Write a Review\" button/modal
- **Add:** Review submission form

### New Component: ReviewForm.jsx
- Modal/dialog with form fields:
  - Name (required)
  - Event Type (dropdown, required)
  - Rating (1-5 stars, required)
  - Comment (textarea, required)
  - Phone (optional, for verification)
- Submit to `POST /api/reviews`

---

## Mock Data to Remove
- `mockData.js` - testimonials array (will be fetched from API)
- Contact form mock submission in Contact.jsx

## Mock Data to Keep
- `mockData.js` - businessInfo (static data)
- `mockData.js` - services (static data)
- `mockData.js` - galleryImages (will be replaced later by user)
"