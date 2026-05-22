import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

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

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: FaUsers,
      title: 'Professional Team',
      description: 'Skilled developers, designers, and strategists dedicated to your success.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Development',
      description: 'Cutting-edge technologies and creative solutions for modern challenges.',
    },
    {
      icon: FaHandshake,
      title: 'Customer-Focused',
      description: 'Your vision is our priority. We build solutions tailored to your needs.',
    },
    {
      icon: FaChartLine,
      title: 'Scalable Technology',
      description: 'Future-proof solutions that grow with your business.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Building <span className="gradient-text">Digital Future</span> Together
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Asven Technology provides complete end-to-end digital solutions for businesses of all sizes. 
              From startups to established enterprises, we transform ideas into powerful digital products 
              that drive growth and success.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Our team combines technical expertise with creative innovation to deliver websites, 
              mobile applications, custom software, and digital marketing solutions that exceed expectations.
            </p>

            {/* Mini Stats with Counter Animation */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  <AnimatedCounter target={100} suffix="%" duration={2} />
                </div>
                <div className="text-sm text-white/50">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  <AnimatedCounter target={50} suffix="+" duration={2} />
                </div>
                <div className="text-sm text-white/50">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-white/50">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
