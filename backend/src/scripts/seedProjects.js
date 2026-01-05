const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('../models/Project');

const projects = [
  {
    title: 'Todo App with JWT Authentication',
    description: 'A full-stack todo application with JWT-based authentication, allowing each user to have their own private todo list with filtering, sorting, and priority management.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Axios', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs'],
    imageUrl: '',
    githubUrl: 'https://github.com/Shivangi-Panigrahy/todo_MERN',
    liveUrl: 'https://todo-mern-2-dc3q.onrender.com/',
    features: [
      'User Authentication with JWT tokens',
      'Private Todo Lists per user',
      'Create, read, update, delete, and toggle todos',
      'Filtering by completion status, priority, and category',
      'Sorting functionality',
      'Modern UI with Tailwind CSS',
      'Secure user isolation'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Property Search Platform',
    description: 'A modern property search platform for finding and exploring real estate listings with advanced search and filtering capabilities.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Render'],
    imageUrl: '',
    githubUrl: 'https://github.com/Shivangi-Panigrahy/Property_Search',
    liveUrl: 'https://property-search-frontend-0zxe.onrender.com/',
    features: [
      'Modern and responsive property search interface',
      'Advanced filtering and search capabilities',
      'Real-time property listings',
      'User-friendly navigation and property details',
      'Deployed on Render for high availability'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Job Management System',
    description: 'A full-stack job management application built with Node.js/Express backend and React frontend, featuring user authentication, role-based access control, and job posting/management capabilities.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'React Bootstrap', 'Tailwind CSS'],
    imageUrl: '',
    githubUrl: 'https://github.com/Shivangi-Panigrahy/job_management_system',
    liveUrl: '',
    features: [
      'User Authentication with JWT tokens',
      'Role-Based Access Control (Admin/User)',
      'Job Management (Create, View, Update, Delete)',
      'Admin Dashboard for managing users and jobs',
      'User Dashboard for browsing and applying to jobs',
      'Modern UI with React Bootstrap and Tailwind CSS',
      'RESTful API architecture'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Role-Based Authentication System ',
    description: 'A Role-Based Authentication system built using modern web technologies with GraphQL API, supporting user authentication with role-based access control (RBAC) using JWT tokens.',
    technologies: ['React 19', 'Vite', 'React Router', 'Apollo Client', 'Redux Toolkit', 'GraphQL', 'Apollo Server', 'PostgreSQL', 'Sequelize', 'JWT', 'bcrypt', 'Nodemailer', 'Tailwind CSS'],
    imageUrl: '',
    githubUrl: 'https://github.com/Shivangi-Panigrahy/Role_based_Authentication',
    liveUrl: '',
    features: [
      'User authentication (Sign-up, Login, Logout)',
      'Role-based access control (Admin, User)',
      'JWT-based authentication',
      'GraphQL API with Apollo Server',
      'PostgreSQL database with Sequelize ORM',
      'Email verification with Nodemailer',
      'Secure password storage using bcrypt',
      'Protected routes and admin dashboard'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Employee Management System',
    description: 'A modern, full-stack web application designed to help organizations efficiently manage their workforce with comprehensive employee management and insightful workforce analytics.',
    technologies: ['React.js', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'Recharts', 'Axios', 'Node.js', 'Express.js', 'MySQL'],
    imageUrl: '',
    githubUrl: 'https://github.com/Shivangi-Panigrahy/employee_management',
    liveUrl: '',
    features: [
      'Add, edit, and delete employee records',
      'Department management',
      'Analytics dashboard with visualizations',
      'Salary distribution insights',
      'Youngest employees by department analysis',
      'Pagination support for employee lists',
      'Real-time data visualization with Recharts'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Inventory Management System',
    description: 'A comprehensive Inventory Management System built with the MERN stack featuring CRUD operations, caching, queuing, search, and filtering functionalities.',
    technologies: ['React.js', 'React Query', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Redis', 'RabbitMQ'],
    imageUrl: '',
    githubUrl: 'https://github.com/Shivangi-Panigrahy/Inventory-Management-System',
    liveUrl: '',
    features: [
      'CRUD Operations for inventory items',
      'User Authentication with JWT',
      'Role-based access control (Admin, Manager, User)',
      'Redis-based caching for improved performance',
      'RabbitMQ integration for background tasks',
      'Advanced search and filtering capabilities',
      'Stock alerts and automated notifications',
      'Rate limiting and security features'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Blog Application',
    description: 'A full-stack blogging application built with Node.js, Express, PostgreSQL for the backend and Next.js for the frontend, featuring user authentication and comment functionality.',
    technologies: ['Next.js', 'React', 'React Hook Form', 'Tanstack React Query', 'Axios', 'Zod', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT'],
    imageUrl: '',
    githubUrl: 'https://github.com/Shivangi-Panigrahy/Blog_app',
    liveUrl: '',
    features: [
      'User authentication (register, login, logout)',
      'Create, edit, and delete blog posts',
      'Comment on blog posts',
      'Rich text editor for blog creation',
      'User profiles',
      'Responsive design',
      'PostgreSQL database with Sequelize ORM'
    ],
    category: 'fullstack',
    featured: true
  },
];

const seedProjects = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shivangi-portfolio');
    console.log('Connected to MongoDB');

    // Clear existing projects (optional - comment out if you want to keep existing)
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert projects
    const insertedProjects = await Project.insertMany(projects);
    console.log(`✅ Successfully seeded ${insertedProjects.length} projects:`);
    
    insertedProjects.forEach((project, index) => {
      console.log(`  ${index + 1}. ${project.title}`);
    });

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding projects:', error);
    await mongoose.connection.close();
    process.exit(1);
  }
};

// Run the seed function
seedProjects();

