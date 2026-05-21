import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaMobileAlt, FaLaptop, FaUtensils, FaVoteYea, FaShoppingBag, FaFileInvoice, FaQrcode, FaCogs } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Websites' },
    { id: 'software', label: 'Software' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Restaurant Ordering App',
      category: 'mobile',
      icon: FaUtensils,
      description: 'Complete food ordering app with real-time tracking, payment integration, and admin dashboard.',
      tags: ['Flutter', 'Firebase', 'Stripe'],
      color: 'from-blue-500 to-red-500',
    },
    {
      id: 2,
      title: 'Political Grievance Platform',
      category: 'web',
      icon: FaVoteYea,
      description: 'Citizen grievance management system with ticket tracking, analytics, and automated responses.',
      tags: ['React', 'Node.js', 'MongoDB'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 3,
      title: 'Ecommerce Store',
      category: 'web',
      icon: FaShoppingBag,
      description: 'Full-featured online store with inventory management, multi-payment options, and analytics.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 4,
      title: 'Billing Software',
      category: 'software',
      icon: FaFileInvoice,
      description: 'GST-compliant billing system with inventory tracking, reports, and multi-user support.',
      tags: ['Electron', 'React', 'SQLite'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 5,
      title: 'QR Menu System',
      category: 'web',
      icon: FaQrcode,
      description: 'Contactless digital menu for restaurants with real-time updates and order management.',
      tags: ['React', 'Firebase', 'QR API'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 6,
      title: 'Business Automation App',
      category: 'mobile',
      icon: FaCogs,
      description: 'Workflow automation app with task management, notifications, and team collaboration.',
      tags: ['React Native', 'Node.js', 'AWS'],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="section-title mt-4">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="section-subtitle">
            Explore our portfolio of successful projects across various industries
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm ${
                activeFilter === filter.id
                  ? 'gradient-bg text-white'
                  : 'glass-card text-white/70 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-hover h-full overflow-hidden">
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <project.icon className="text-white text-2xl" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.category === 'mobile' && <FaMobileAlt className="text-white/80" />}
                      {project.category === 'web' && <FaLaptop className="text-white/80" />}
                      {project.category === 'software' && <FaCogs className="text-white/80" />}
                      <span className="text-white/80 text-sm capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-white/5 rounded-full text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Start Your Project</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
