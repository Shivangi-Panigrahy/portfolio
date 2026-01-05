'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  category: string;
  featured: boolean;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Default projects based on resume
  const defaultProjects: Project[] = [
    {
      _id: '1',
      title: 'Acuity Insights – Formative Assessment Platform (LA Model)',
      description: 'Formative assessment platform enabling schools and organizations to conduct structured, scenario-based tests.',
      technologies: ['Next.js', 'React', 'TypeScript', 'NestJS', 'MongoDB', 'PostgreSQL', 'Prisma', 'Material UI', 'Tailwind CSS'],
      imageUrl: '',
      githubUrl: '',
      liveUrl: '',
      features: [
        'Worked on the Limited Availability (LA) model of a formative assessment platform used by students, schools, and organizations',
        'Implemented backend enablement and LA-specific availability logic to support structured test scenarios',
        'Designed PostgreSQL schemas and executed data migration from MongoDB to PostgreSQL using migration scripts and data dumps',
        'Collaborated on UI implementation by translating Figma designs into responsive components using Material UI and Tailwind CSS',
        'Participated in code reviews and Git-based workflows to ensure scalable and maintainable implementations'
      ],
      category: 'fullstack',
      featured: true
    },
    {
      _id: '2',
      title: 'Emersion Education – AI-Based Evaluation Platform',
      description: 'Student-facing portal for competition discovery, submission, AI-based evaluation, and result declaration.',
      technologies: ['Next.js', 'React', 'JavaScript', 'Material Design 3', 'Stripe', 'REST APIs', 'Axios'],
      imageUrl: '',
      githubUrl: '',
      liveUrl: '',
      features: [
        'Developed a student-facing competition portal enabling account creation, competition discovery, submissions, and result tracking',
        'Implemented responsive UI screens using Next.js by translating Figma designs based on Material Design 3 (MD3) principles',
        'Integrated REST APIs for registration, competition listing, submission flow, and result declaration',
        'Implemented Stripe payment gateway with webhook handling for subscriptions, cancellations, and payment status updates',
        'Collaborated with backend teams to align frontend requirements with Django-based APIs, ensuring smooth end-to-end workflows'
      ],
      category: 'fullstack',
      featured: true
    },
    {
      _id: '3',
      title: 'Instagram DM – Private Replies Automation (SaaS Platform)',
      description: 'SaaS automation tool enabling businesses to send Instagram private replies triggered by public comments.',
      technologies: ['Next.js', 'Node.js', 'Hono (Bun)', 'Nx Monorepo', 'MongoDB', 'OAuth 2.0', 'Meta Graph API', 'Render'],
      imageUrl: '',
      githubUrl: '',
      liveUrl: '',
      features: [
        'Built a SaaS automation platform to send Instagram private replies triggered by public comments using Meta\'s Messenger Platform APIs',
        'Designed a monorepo architecture using Nx, separating frontend (Next.js) and backend (Hono) for clean scalability',
        'Implemented OAuth 2.0 authentication, webhook subscriptions, and long-lived token management with MongoDB',
        'Developed a keyword-based message templating engine and a full-featured admin dashboard for rules, templates, logs, and monitoring',
        'Enabled secure deployment and production-grade reliability with logging, error handling, throttling, and environment-based secrets'
      ],
      category: 'fullstack',
      featured: true
    },
    {
      _id: '4',
      title: 'MediSync Pro – Medical Management Platform',
      description: 'Healthcare management system for centralized patient records, physician workflows, and hospital operations.',
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Material UI', 'Nodemailer'],
      imageUrl: '',
      githubUrl: '',
      liveUrl: '',
      features: [
        'Developed Admin and Physician panels to manage multi-hospital patient records, physician data, and medical history',
        'Implemented secure backend APIs using Node.js and Express to handle sensitive healthcare data and workflows',
        'Integrated email-based consent and approval workflows using Nodemailer with automated notifications',
        'Managed global state using Redux Toolkit, ensuring consistent UI behavior across modules',
        'Optimized MongoDB data models and queries for efficient storage and retrieval at scale'
      ],
      category: 'fullstack',
      featured: true
    },
    {
      _id: '5',
      title: 'TalentMatch Hub – Skill-Based Resource Allocation Platform',
      description: 'Platform for aligning team skills with project requirements using real-time collaboration and analytics.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Socket.io'],
      imageUrl: '',
      githubUrl: '',
      liveUrl: '',
      features: [
        'Developed a full-stack platform with Admin, Core, and Match panels to manage skill-based resource allocation',
        'Designed a multi-database architecture integrating PostgreSQL and MongoDB for structured and unstructured data synchronization',
        'Built GraphQL APIs with complex queries and mutations for flexible data access in the Core module',
        'Integrated Socket.io to enable real-time communication between organizations and users',
        'Implemented authentication, access control, and role-based permissions, following clean code and review practices'
      ],
      category: 'fullstack',
      featured: true
    }
  ];

  useEffect(() => {
    // In a real app, you would fetch from your API
    // For now, using default projects
    setProjects(defaultProjects);
    setLoading(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-white text-2xl">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Projects.
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          ></motion.div>
        </motion.div>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 text-center">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>

        <div className="relative w-full">
          <div className="overflow-x-auto w-full pb-4 hide-scrollbar pointer-events-none" ref={scrollRef}>
            <div className="flex flex-nowrap gap-8 min-w-max snap-x snap-mandatory">
              {projects.map((project) => (
                <motion.div
                  key={project._id}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 flex-shrink-0 w-[340px] md:w-[370px] lg:w-[400px] flex flex-col snap-center"
                >
                  <div className="relative">
                    {/* Project image or preview */}
                    <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-t-2xl">
                      {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="object-contain h-full w-full rounded-t-2xl" />
                      ) : (
                        <div className="text-center p-4">
                          <div className="text-4xl mb-2">🚀</div>
                          <p className="text-white/60 text-sm font-medium">{project.title}</p>
                        </div>
                      )}
                    </div>
                    {/* Links overlay */}
                    <div className="absolute top-3 right-3 flex gap-2 z-10">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-black/70 rounded-full p-2 hover:bg-purple-600 transition-colors">
                          <ExternalLink size={20} className="text-white" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-black/70 rounded-full p-2 hover:bg-purple-600 transition-colors">
                          <Github size={20} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Scroll Left Button */}
          <button
            type="button"
            className="hidden md:flex items-center justify-center absolute left-[-32px] top-1/2 -translate-y-1/2 z-20 bg-purple-600 hover:bg-pink-500 text-white rounded-full shadow-lg w-12 h-12 transition-colors duration-300 pointer-events-auto"
            style={{ boxShadow: '0 2px 12px 0 rgba(80,0,120,0.15)' }}
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
              }
            }}
          >
            <ChevronLeft size={32} />
          </button>
          {/* Scroll Right Button */}
          <button
            type="button"
            className="hidden md:flex items-center justify-center absolute right-[-32px] top-1/2 -translate-y-1/2 z-20 bg-purple-600 hover:bg-pink-500 text-white rounded-full shadow-lg w-12 h-12 transition-colors duration-300 pointer-events-auto"
            style={{ boxShadow: '0 2px 12px 0 rgba(80,0,120,0.15)' }}
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
              }
            }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 