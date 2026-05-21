import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaUtensils, FaStore, FaHospital, FaVoteYea, 
  FaGraduationCap, FaShoppingCart, FaBuilding, FaTruck 
} from 'react-icons/fa';

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const industries = [
    {
      icon: FaUtensils,
      name: 'Restaurants',
      description: 'Digital menus, ordering apps, and delivery solutions',
      color: 'from-blue-500 to-red-500',
    },
    {
      icon: FaStore,
      name: 'Retail',
      description: 'POS systems, inventory management, and ecommerce',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaHospital,
      name: 'Healthcare',
      description: 'Patient management and appointment systems',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaVoteYea,
      name: 'Politics',
      description: 'Campaign management and grievance platforms',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaGraduationCap,
      name: 'Education',
      description: 'Learning management and student portals',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: FaShoppingCart,
      name: 'Ecommerce',
      description: 'Online stores and marketplace solutions',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: FaBuilding,
      name: 'Real Estate',
      description: 'Property listing and management platforms',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: FaTruck,
      name: 'Logistics',
      description: 'Fleet management and tracking systems',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="section-title mt-4">
            Solutions for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="section-subtitle">
            We deliver tailored digital solutions across diverse sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
              <p className="text-white/50 text-sm">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Looking for <span className="gradient-text">Technology Partners?</span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              We don't just build software. We build business growth. Partner with Asven Technology for startup partnerships, 
              long-term collaboration, and complete business digitization support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-primary">
                Become a Partner
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
