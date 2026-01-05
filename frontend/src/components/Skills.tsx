'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiMeteor, SiRedux, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiHono, SiNestjs, SiMongodb, SiPostgresql, SiDrizzle, SiSequelize, SiGraphql, SiSocketdotio, SiAmazon, SiRender, SiVercel, SiGithub, SiMeta, SiPostman, SiDocker, SiJira, SiLinear, SiMicrodotblog, SiGarmin, SiApollographql, SiTailwindcss
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3 & CSS5', icon: <SiCss3 /> },
      { name: 'Bootstrap 5', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'NextJs', icon: <SiNextdotjs /> },
      { name: 'Meteor Js', icon: <SiMeteor /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'UI Libraries', icon: <SiReact /> },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Hono', icon: <SiHono /> },
      { name: 'Nest.js', icon: <SiNestjs /> },
    ]
  },
  {
    title: 'Databases / ORM',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Drizzle-ORM', icon: <SiDrizzle /> },
      { name: 'Sequelize', icon: <SiSequelize /> },
      { name: 'Prisma', icon: <SiDrizzle /> },
    ]
  },
  {
    title: 'DevOps / Tools',
    skills: [
      { name: 'GitHub Actions', icon: <SiGithub /> },
      { name: 'AWS', icon: <SiAmazon /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Vite', icon: <SiVercel /> },
    ]
  },
  {
    title: 'API and Data Handling',
    skills: [
      { name: 'Rest APIs with OAuth 2.0', icon: <SiApollographql /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
    ]
  },
  {
    title: 'Real Time Chat Integration & Cloud',
    skills: [
      { name: 'Socket.io (Client+Server)', icon: <SiSocketdotio /> },
      { name: 'AWS S3', icon: <SiAmazon /> },
      { name: 'Render', icon: <SiRender /> },
      { name: 'Vercel', icon: <SiVercel /> },
    ]
  },
  {
    title: 'Applications & Tools Known',
    skills: [
      { name: 'Git', icon: <SiGithub /> },
      { name: 'Visual Studio Code', icon: <SiGithub /> },
      { name: 'Cursor', icon: <SiGithub /> },
      { name: 'Basecamp', icon: <SiGithub /> },
      { name: 'Sourcetree', icon: <SiGithub /> },
      { name: 'Linear', icon: <SiLinear /> },
      { name: 'Asana', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Meta Developer Tools', icon: <SiMeta /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'JIRA', icon: <SiJira /> },
      { name: 'Lovable', icon: <SiGithub /> },
    ]
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
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
            Skills & Technologies
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center gap-6">
              <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {category.skills.map((skill, skillIdx) => (
            <motion.div
                    key={skillIdx}
              variants={itemVariants}
                    className="flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 gap-2 text-white text-base font-semibold shadow hover:bg-white/20 transition-all duration-300 min-w-[140px]"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 