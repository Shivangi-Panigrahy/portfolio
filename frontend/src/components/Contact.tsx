'use client';

import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again or contact me directly at shivangipanigrahy20@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'shivangipanigrahy20@gmail.com',
      href: 'mailto:shivangipanigrahy20@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7008558662',
      href: 'tel:+917008558662'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Ahmedabad, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <m.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <m.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get In Touch
          </m.h2>
          <m.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          ></m.div>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <m.div variants={itemVariants} className="space-y-8 bg-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-purple-400/30 shadow-2xl relative overflow-hidden">
              {/* Decorative Animated Icon */}
              <m.div
                initial={{ y: -10 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 z-10"
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" fill="url(#grad1)" opacity="0.2"/>
                  <path d="M32 16c-8.837 0-16 6.268-16 14s7.163 14 16 14 16-6.268 16-14-7.163-14-16-14zm0 24c-5.523 0-10-4.03-10-9s4.477-9 10-9 10 4.03 10 9-4.477 9-10 9z" fill="#a78bfa"/>
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a78bfa"/>
                      <stop offset="1" stopColor="#f472b6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </m.div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <m.a
                    key={index}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 rgba(168,139,250,0.15)' }}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-purple-400/20 hover:bg-white/20 transition-all duration-300 shadow"
                  >
                    <div className="text-purple-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </m.a>
                ))}
              </div>
            </m.div>
          </m.div>

          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <m.div variants={itemVariants}>
              {isSubmitted ? (
                <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border border-green-500/30">
                  <div className="text-center">
                    <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. I&apos;ll get back to you soon!
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 border border-pink-400/30 shadow-2xl">
                  <div className="space-y-6">
                    {/* Floating label input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="peer w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-colors duration-300"
                        placeholder="Your name"
                      />
                      <label htmlFor="name" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-transparent px-1">
                        Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="peer w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                      <label htmlFor="email" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-transparent px-1">
                        Email
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="peer w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-colors duration-300"
                        placeholder="What's this about?"
                      />
                      <label htmlFor="subject" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-transparent px-1">
                        Subject
                      </label>
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="peer w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                      <label htmlFor="message" className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-purple-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 bg-transparent px-1">
                        Message
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-transparent hover:border-pink-400 shadow-lg hover:shadow-pink-400/30"
                      style={{ boxShadow: '0 4px 24px 0 rgba(244,114,182,0.15)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 