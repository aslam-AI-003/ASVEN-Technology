import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaWordpress, FaFigma
} from 'react-icons/fa';
import { 
  SiMongodb, SiFirebase, SiFlutter, SiTypescript, SiTailwindcss,
  SiNextdotjs, SiPostgresql, SiRedis, SiGraphql, SiOpenai
} from 'react-icons/si';

// Infinite Marquee Component
const InfiniteMarquee = ({ items, direction = 'left', speed = 30 }) => {
  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0f172a] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0f172a] to-transparent z-10" />
      
      <div
        className="flex gap-4"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {/* Original items */}
        {items.map((tech, index) => (
          <div
            key={`original-${index}`}
            className="glass-card px-5 py-4 flex flex-col items-center justify-center min-w-[100px] group hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
            title={tech.name}
          >
            <tech.icon 
              className="text-3xl mb-2 transition-colors duration-300" 
              style={{ color: tech.color }}
            />
            <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors text-center whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
        {/* Duplicated items for seamless loop */}
        {items.map((tech, index) => (
          <div
            key={`duplicate-${index}`}
            className="glass-card px-5 py-4 flex flex-col items-center justify-center min-w-[100px] group hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0"
            title={tech.name}
          >
            <tech.icon 
              className="text-3xl mb-2 transition-colors duration-300" 
              style={{ color: tech.color }}
            />
            <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors text-center whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologiesRow1 = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  ];

  const technologiesRow2 = [
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
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
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Technology Stack</span>
          <h2 className="section-title mt-4">
            Powered by <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="section-subtitle">
            We use cutting-edge technologies to build robust, scalable, and high-performance solutions
          </p>
        </motion.div>

        {/* Infinite Marquee - Row 1 (scrolls left) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <InfiniteMarquee items={technologiesRow1} direction="left" speed={35} />
        </motion.div>

        {/* Infinite Marquee - Row 2 (scrolls right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <InfiniteMarquee items={technologiesRow2} direction="right" speed={40} />
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: 'Frontend',
              description: 'React, Next.js, Flutter, TypeScript, Tailwind CSS for stunning user interfaces',
              gradient: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Backend',
              description: 'Node.js, Python, GraphQL, REST APIs for powerful server-side solutions',
              gradient: 'from-green-500 to-emerald-500',
            },
            {
              title: 'Cloud & AI',
              description: 'AWS, Firebase, MongoDB, OpenAI for scalable and intelligent systems',
              gradient: 'from-purple-500 to-pink-500',
            },
          ].map((category, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} mb-4`}>
                <span className="text-sm font-semibold text-white">{category.title}</span>
              </div>
              <p className="text-white/50 text-sm">{category.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
