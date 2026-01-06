# Shivangi Panigrahy - Portfolio

A modern, responsive portfolio website built with the MERN stack showcasing Shivangi Panigrahy's skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Detailed project presentations with technologies used
- **Real-time Updates**: Backend API for dynamic content management

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email functionality
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
shivangi-portfolio/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # React components
│   │   └── ...
│   ├── public/              # Static assets
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── config/          # Configuration files
│   │   └── ...
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shivangi-Panigrahy/portfolio.git
   cd portfolio
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Create environment variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=8000
   MONGODB_URI=mongodb+srv://your-connection-string
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   JWT_SECRET=your-jwt-secret-key
   NODE_ENV=development
   ```

4. **Start the Backend**
   ```bash
   npm run dev
   ```

5. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

6. **Start the Frontend**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 API Endpoints

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

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `frontend/src/components/Hero.tsx` - Hero section
- `frontend/src/components/About.tsx` - About section
- `frontend/src/components/Experience.tsx` - Work experience
- `frontend/src/components/Projects.tsx` - Projects
- `frontend/src/components/Contact.tsx` - Contact information

### Styling
- Modify `frontend/tailwind.config.js` for custom colors and themes
- Update component styles in individual component files
- Customize animations in Framer Motion variants

## 🚀 Deployment

### Free Deployment (Recommended)

Deploy your entire portfolio for **FREE** using Vercel (Frontend) + Render (Backend).

**Quick Start**: See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for 5-minute setup guide.

**Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions.

### Deployment Options

1. **Vercel + Render** (Recommended - Completely Free)
   - Frontend: Vercel (optimized for Next.js)
   - Backend: Render (free tier available)
   - Cost: $0/month

2. **Render for Both** (Single Platform)
   - Deploy both frontend and backend on Render
   - Cost: Free tier available

3. **Vercel + Railway**
   - Frontend: Vercel
   - Backend: Railway ($5 credit/month)

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📱 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Scrolling**: Navigation with smooth scroll animations
- **Contact Form**: Functional contact form with email notifications
- **Project Showcase**: Detailed project presentations
- **Skills Display**: Organized skill categories
- **Experience Timeline**: Professional experience presentation
- **Social Links**: Direct links to LinkedIn, GitHub, and email

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shivangi Prapti Panigrahy**
- Email: shivangipanigrahy20@gmail.com
- LinkedIn: [Shivangi Prapti Panigrahy](http://linkedin.com/in/shivangi-prapti-panigrahy-6408b6193)
- GitHub: [Shivangi-Panigrahy](https://github.com/Shivangi-Panigrahy)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- Lucide for beautiful icons
