# Shivangi Portfolio Backend

Backend API for Shivangi Panigrahy's portfolio website built with Node.js, Express, and MongoDB.

## Features

- Contact form handling with email notifications
- Project management API
- MongoDB database integration
- RESTful API endpoints
- CORS enabled for frontend integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shivangi-portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
JWT_SECRET=your-jwt-secret-key
NODE_ENV=development
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Health Check
- `GET /api/health` - Server health check

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer for email notifications
- CORS for cross-origin requests 