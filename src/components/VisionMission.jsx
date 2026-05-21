import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: FaEye,
      title: 'Our Vision',
      description: 'To become a leading digital transformation company helping businesses grow through innovative technology.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaBullseye,
      title: 'Our Mission',
      description: 'To deliver scalable, smart, and affordable digital solutions for every business, empowering them to thrive in the digital age.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: FaHeart,
      title: 'Our Values',
      description: 'Innovation, integrity, customer-centricity, and excellence drive everything we do. We build relationships, not just software.',
      gradient: 'from-pink-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h2 className="section-title mt-4">
            Driven by <span className="gradient-text">Purpose</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="glass-card p-8 relative h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6`}>
                  <card.icon className="text-white text-2xl" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.description}</p>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${card.gradient} rounded-full opacity-50`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-10 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="text-6xl text-blue-500/30 font-serif mb-4">"</div>
              <p className="text-xl md:text-2xl font-medium text-white/80 italic mb-6">
                We don't just build software. We build business growth.
              </p>
              <p className="text-blue-500 font-semibold">— Asven Technology</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
