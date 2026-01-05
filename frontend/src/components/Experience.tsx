'use client';

import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer (SDE-2) - Fullstack',
      company: 'Pragetx Softwares Pvt. Ltd',
      location: 'Ahmedabad, India',
      duration: '04/2025 - Present',
      type: 'WFO',
      period: '9 Months',
      responsibilities: [
        'Worked on end-to-end backend and frontend features across multiple projects, including AI integrations, healthcare data platforms, and SaaS systems',
        'Performed R&D and architectural analysis on GPT-based systems, identifying quality gaps between UI and API implementations and proposing improvements using knowledge integration',
        'Implemented and maintained backend APIs and business logic using Node.js / NestJS, including RBAC, delete-user modules, webhook handling, and SDK customizations',
        'Integrated and tested third-party services and APIs such as Terra Health APIs, AWS SES, Google & Apple social login, ensuring secure and reliable data flow',
        'Collaborated closely with designers, frontend developers, backend engineers, clients and cross functional teams to translate requirements into stable, production-ready solutions'
      ],
      achievements: [
        'Successfully cleared multiple client technical interviews, demonstrating strong problem-solving and system-design skills',
        'Received direct appreciation from clients for technical expertise, communication clarity, and delivery quality',
        'Consistently met and exceeded client expectations by delivering features aligned with business and product goals',
        'Quickly learned and applied new tools, SDKs, and technologies (AI workflows, Terra APIs, AWS services), contributing to faster and more reliable project execution'
      ]
    },
    {
      title: 'Junior Software Engineer – Fullstack',
      company: 'BrainerHub Solutions',
      location: 'Ahmedabad, India',
      duration: '02/2023 – 03/2025',
      type: 'WFO',
      period: '2.2 Years',
      responsibilities: [
        'Developed and maintained full-stack web applications with role-based access, admin dashboards, and secure data handling using modern web technologies',
        'Built and integrated backend APIs and real-time features, collaborating with the team to ensure scalable, maintainable solutions'
      ],
      achievements: [
        'Successfully delivered core features and modules that supported real-world business workflows and long-term platform stability',
        'Recognized for adaptability and consistent code quality, contributing positively to team velocity and delivery timelines'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 relative z-10 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-purple-400" size={20} />
                    <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                  </div>
                  <h4 className="text-xl text-purple-400 font-medium mb-2">{exp.company}</h4>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {exp.type}
                    </span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <h5 className="text-white font-semibold mb-3">Responsibilities:</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div>
                    <h5 className="text-white font-semibold mb-3">Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
