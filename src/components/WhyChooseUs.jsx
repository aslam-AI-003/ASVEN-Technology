import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaMoneyBillWave, FaRocket, FaMicrochip, FaHeadset, 
  FaCog, FaPaintBrush, FaSeedling, FaShieldAlt 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: FaMoneyBillWave,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality. Budget-friendly solutions for every business.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      description: 'Quick turnaround times to get your project live and running in record time.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaMicrochip,
      title: 'Modern Technology',
      description: 'Latest frameworks and tools ensuring your product stays ahead of the curve.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to resolve issues and answer queries anytime.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaCog,
      title: 'Custom Solutions',
      description: 'Tailored development approach to match your unique business requirements.',
      color: 'from-red-500 to-blue-500',
    },
    {
      icon: FaPaintBrush,
      title: 'High-Quality UI/UX',
      description: 'Beautiful, intuitive designs that enhance user experience and engagement.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: FaSeedling,
      title: 'Startup-Friendly',
      description: 'Special packages and flexible terms designed for growing businesses.',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: FaShieldAlt,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliable infrastructure for peace of mind.',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="section-title mt-4">
            Your <span className="gradient-text">Technology Growth Partner</span>
          </h2>
          <p className="section-subtitle">
            Discover why businesses trust Asven Technology for their digital transformation journey
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">Ready to transform your business?</p>
          <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Get Free Consultation</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
