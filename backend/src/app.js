const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware - CORS configuration
// For development, allow all origins. For production, allow frontend URLs.
const corsOptions = {
  origin: function (origin, callback) {
    // Log for debugging
    console.log(`🌐 CORS check - Origin: ${origin}, NODE_ENV: ${process.env.NODE_ENV}`);
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      console.log('✅ CORS: Allowing request with no origin');
      return callback(null, true);
    }
    
    // In development, allow all origins
    if (process.env.NODE_ENV !== 'production') {
      console.log('✅ CORS: Allowing all origins (development mode)');
      return callback(null, true);
    }
    
    // In production, allow main frontend URL and common deployment platforms
    const allowedOrigins = [];
    
    // Add main frontend URL
    if (process.env.FRONTEND_URL) {
      allowedOrigins.push(process.env.FRONTEND_URL);
      console.log(`📝 CORS: Added FRONTEND_URL to allowed origins: ${process.env.FRONTEND_URL}`);
    }
    
    // Normalize origin for comparison (lowercase)
    const normalizedOrigin = origin.toLowerCase();
    
    // Allow all Vercel preview URLs (for pull requests and branches)
    // Vercel URLs: *.vercel.app
    if (normalizedOrigin.includes('.vercel.app')) {
      console.log('✅ CORS: Allowing Vercel URL');
      return callback(null, true);
    }
    
    // Allow all Render URLs (for Render deployments)
    // Render URLs: *.onrender.com
    if (normalizedOrigin.includes('.onrender.com')) {
      console.log('✅ CORS: Allowing Render URL');
      return callback(null, true);
    }
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin) || allowedOrigins.some(allowed => allowed.toLowerCase() === normalizedOrigin)) {
      console.log('✅ CORS: Origin in allowed list');
      callback(null, true);
    } else {
      console.log(`❌ CORS: Rejecting origin: ${origin}`);
      console.log(`   Allowed origins: ${allowedOrigins.join(', ')}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shivangi-portfolio')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('⚠️  Server will continue but database operations may fail.');
    console.log('💡 Make sure MongoDB is running or set MONGODB_URI in .env file');
  });

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/projects', require('./routes/projects'));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
