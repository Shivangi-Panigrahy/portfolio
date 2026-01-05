# Deployment Guide for Portfolio Website

## 🚀 GitHub Push Complete!

Your code has been pushed to: https://github.com/Shivangi-Panigrahy/portfolio.git

---

## 📧 NodeMailer Setup Guide

### Step 1: Get Gmail App Password

1. **Enable 2-Factor Authentication** on your Gmail account:
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Website" as the name
   - Click "Generate"
   - **Copy the 16-character password** (you'll need this!)

### Step 2: Set Up Environment Variables

#### For Backend (Render):

Create these environment variables in Render dashboard:

```
EMAIL_USER=shivangipanigrahy20@gmail.com
EMAIL_PASS=<your-16-character-app-password>
MONGODB_URI=<your-mongodb-connection-string>
PORT=5000
NODE_ENV=production
```

#### For Frontend (Render):

Create this environment variable:

```
NEXT_PUBLIC_API_URL=https://your-backend-service.onrender.com
```

---

## 🎯 Render Deployment Steps

### Backend Deployment:

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**: `Shivangi-Panigrahy/portfolio`
4. **Configure Backend Service**:
   - **Name**: `shivangi-portfolio-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Port**: `5000`

5. **Add Environment Variables** (from Step 2 above)

6. **Click "Create Web Service"**

### Frontend Deployment:

1. **Click "New +" → "Web Service"**
2. **Connect the same GitHub repository**
3. **Configure Frontend Service**:
   - **Name**: `shivangi-portfolio-frontend`
   - **Root Directory**: `frontend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Port**: `3000` (or leave blank for Next.js)

4. **Add Environment Variable**:
   - `NEXT_PUBLIC_API_URL=https://your-backend-service.onrender.com`

5. **Click "Create Web Service"**

---

## 🧪 Testing NodeMailer

### Option 1: Test Locally First

1. **Create `backend/.env` file**:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shivangi-portfolio
EMAIL_USER=shivangipanigrahy20@gmail.com
EMAIL_PASS=<your-app-password>
NODE_ENV=development
```

2. **Start MongoDB** (if using local):
```bash
mongod
```

3. **Start Backend**:
```bash
cd backend
npm install
npm run dev
```

4. **Start Frontend**:
```bash
cd frontend
npm install
npm run dev
```

5. **Test Contact Form**: Fill out the form and submit

### Option 2: Test on Render

1. Deploy backend first
2. Update frontend's `NEXT_PUBLIC_API_URL` to point to your Render backend URL
3. Deploy frontend
4. Test the contact form on the live site

---

## 🔍 Troubleshooting NodeMailer

### Common Issues:

1. **"Invalid login" error**:
   - Make sure you're using the **App Password**, not your regular Gmail password
   - Verify 2FA is enabled

2. **"Connection timeout"**:
   - Check if your email service allows SMTP connections
   - Try using a different email provider (Outlook, SendGrid, etc.)

3. **Emails not received**:
   - Check spam folder
   - Verify `EMAIL_USER` matches the account that generated the app password
   - Check Render logs for errors

### Alternative Email Services:

If Gmail doesn't work, you can use:

**SendGrid** (Free tier: 100 emails/day):
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
```

**Outlook/Hotmail**:
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

---

## 📝 MongoDB Setup (Render)

### Option 1: MongoDB Atlas (Recommended - Free):

1. Go to: https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to Render environment variables as `MONGODB_URI`

### Option 2: Render MongoDB (Paid):

1. In Render dashboard: "New +" → "MongoDB"
2. Copy connection string
3. Add to backend environment variables

---

## ✅ Checklist Before Deploying:

- [ ] Gmail App Password generated
- [ ] Backend environment variables set in Render
- [ ] Frontend environment variables set in Render
- [ ] MongoDB connection string ready
- [ ] Backend deployed and running
- [ ] Frontend `NEXT_PUBLIC_API_URL` points to backend URL
- [ ] Frontend deployed and running
- [ ] Contact form tested

---

## 🎉 After Deployment:

1. Test the contact form on your live site
2. Check your email inbox for test messages
3. Monitor Render logs for any errors
4. Update your portfolio links to point to the live site!

Good luck with your deployment! 🚀

