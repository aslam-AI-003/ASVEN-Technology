import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLightbulb, FaPencilRuler, FaCode, FaVial, FaRocket, FaHeadset } from 'react-icons/fa';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: FaLightbulb,
      title: 'Idea',
      description: 'We start by understanding your vision, goals, and requirements through detailed discussions.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: FaPencilRuler,
      title: 'Design',
      description: 'Our designers create stunning UI/UX mockups and prototypes for your approval.',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: FaCode,
      title: 'Development',
      description: 'Expert developers bring designs to life with clean, scalable, and efficient code.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaVial,
      title: 'Testing',
      description: 'Rigorous quality assurance ensures bug-free, high-performance applications.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaRocket,
      title: 'Launch',
      description: 'We deploy your project and ensure smooth go-live with zero downtime.',
      color: 'from-blue-500 to-red-500',
    },
    {
      icon: FaHeadset,
      title: 'Support',
      description: 'Ongoing maintenance and 24/7 support to keep your business running smoothly.',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="section-title mt-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A streamlined development process that ensures quality delivery on time
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 gradient-bg rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mt-4 mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="text-white text-2xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-blue-500/50">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Alternative View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Project Timeline</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { phase: 'Discovery', duration: '1-2 Days' },
              { phase: 'Design', duration: '3-5 Days' },
              { phase: 'Development', duration: '1-4 Weeks' },
              { phase: 'Testing', duration: '2-3 Days' },
              { phase: 'Launch', duration: '1 Day' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center px-4">
                  <div className="text-sm font-semibold text-white">{item.phase}</div>
                  <div className="text-xs text-blue-500">{item.duration}</div>
                </div>
                {index < 4 && (
                  <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-cyan-500 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
