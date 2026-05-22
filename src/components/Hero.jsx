import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { FaRocket, FaCode, FaMobile, FaBrain } from 'react-icons/fa';

// Counter component that animates from 0 to target number
const AnimatedCounter = ({ target, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Word rotate component
const WordRotate = ({ words, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 30, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -30, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block gradient-text"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => {
  const floatingIcons = [
    { Icon: FaCode, delay: 0, position: 'top-20 left-10' },
    { Icon: FaMobile, delay: 0.2, position: 'top-40 right-20' },
    { Icon: FaBrain, delay: 0.4, position: 'bottom-40 left-20' },
    { Icon: FaRocket, delay: 0.6, position: 'bottom-20 right-10' },
  ];

  const rotatingWords = ['Idea', 'Vision', 'Concept', 'Dream'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: delay + 1, duration: 0.8 }}
          className={`absolute ${position} hidden lg:block`}
        >
          <div className="glass-card p-4 animate-float" style={{ animationDelay: `${delay * 2}s` }}>
            <Icon className="text-blue-500 text-2xl" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          From <WordRotate words={rotatingWords} /> to
          <br />
          <span className="gradient-text">Innovation</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10"
        >
          Asven Technology is a next-generation digital solutions company focused on transforming businesses through innovative software, mobile applications, website development, AI-powered solutions, branding, and digital automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#contact" className="btn-primary flex items-center space-x-2 group">
            <span>Start Your Project</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#projects" className="btn-secondary flex items-center space-x-2">
            <HiPlay />
            <span>View Our Work</span>
          </a>
        </motion.div>

        {/* Stats with Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: 50, suffix: '+', label: 'Projects Completed' },
            { number: 30, suffix: '+', label: 'Happy Clients' },
            { number: 5, suffix: '+', label: 'Years Experience' },
            { number: null, display: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.number !== null ? (
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={2} />
                ) : (
                  stat.display
                )}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-blue-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
