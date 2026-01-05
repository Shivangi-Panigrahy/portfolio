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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
        const response = await fetch(`${apiUrl}/api/projects`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        // Ensure we have an array
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.warn('API returned non-array data:', data);
          setProjects([]);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Show a single "Coming Soon" project as fallback
        setProjects([{
          _id: 'fallback',
          title: 'Property Search Platform - Coming Soon',
          description: 'A modern property search platform for finding and exploring real estate listings with advanced search and filtering capabilities.',
          technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Render'],
          imageUrl: '',
          githubUrl: '',
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
        }]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
                  className={`bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 flex-shrink-0 w-[340px] md:w-[370px] lg:w-[400px] flex flex-col snap-center ${project.liveUrl ? 'cursor-pointer' : ''}`}
                  onClick={(e) => {
                    // Only open if clicking on the card itself, not on buttons/icons
                    const target = e.target as HTMLElement;
                    if (project.liveUrl && !target.closest('button') && !target.closest('.z-50')) {
                      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <div className="relative" style={{ pointerEvents: 'auto' }}>
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
                    <div className="absolute top-3 right-3 flex gap-2 z-50" style={{ pointerEvents: 'auto' }}>
                      {project.liveUrl && (
                        <button
                          type="button"
                          className="bg-black/70 rounded-full p-2 hover:bg-purple-600 transition-colors cursor-pointer border-none outline-none relative z-50"
                          style={{ pointerEvents: 'auto' }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Opening live URL:', project.liveUrl);
                            if (project.liveUrl) {
                              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          aria-label="Open live demo"
                        >
                          <ExternalLink size={20} className="text-white" style={{ pointerEvents: 'none' }} />
                        </button>
                      )}
                      {project.githubUrl && (
                        <button
                          type="button"
                          className="bg-black/70 rounded-full p-2 hover:bg-purple-600 transition-colors cursor-pointer border-none outline-none relative z-50"
                          style={{ pointerEvents: 'auto' }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Opening GitHub URL:', project.githubUrl);
                            if (project.githubUrl) {
                              window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          aria-label="Open GitHub repository"
                        >
                          <Github size={20} className="text-white" style={{ pointerEvents: 'none' }} />
                        </button>
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