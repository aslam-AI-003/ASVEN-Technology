import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Restaurant Owner',
      company: 'Spice Garden Restaurant',
      content: 'Asven Technology transformed our business with a stunning website and mobile app. Our online orders increased by 150% within 3 months. Professional service and fast delivery!',
      rating: 5,
      avatar: 'RK',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'EduTech Startup',
      content: 'Best software development team I have worked with. They understood our requirements perfectly and delivered an exceptional learning management system. Highly recommended!',
      rating: 5,
      avatar: 'PS',
    },
    {
      name: 'Mohammed Ali',
      role: 'Political Campaign Manager',
      company: 'Citizens Connect',
      content: 'The grievance management platform they built helped us connect with over 10,000 citizens. The real-time analytics and automation features are outstanding.',
      rating: 5,
      avatar: 'MA',
    },
    {
      name: 'Anitha Rajan',
      role: 'Retail Store Owner',
      company: 'Fashion Hub',
      content: 'Our ecommerce website is beautiful and easy to manage. The team provided excellent support throughout the project. Sales have doubled since launch!',
      rating: 5,
      avatar: 'AR',
    },
    {
      name: 'Suresh Babu',
      role: 'CEO',
      company: 'AutoParts India',
      content: 'The billing and inventory software completely streamlined our operations. What used to take hours now takes minutes. A game-changer for our business!',
      rating: 5,
      avatar: 'SB',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="section-title mt-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Hear from businesses we've helped transform through digital solutions
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 relative">
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-8 left-8 text-4xl text-blue-500/20" />
            
            {/* Content */}
            <div className="text-center">
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center text-2xl font-bold">
                {testimonials[activeIndex].avatar}
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-cyan-500 text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic"
              >
                "{testimonials[activeIndex].content}"
              </motion.p>

              {/* Client Info */}
              <div>
                <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-blue-500">{testimonials[activeIndex].role}</p>
                <p className="text-white/50 text-sm">{testimonials[activeIndex].company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <FaChevronLeft className="text-white/70" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <FaChevronRight className="text-white/70" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'w-8 gradient-bg' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mini Testimonial Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                activeIndex === index ? 'border-blue-500/50' : 'hover:border-white/20'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                  <p className="text-white/50 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-cyan-500 text-xs" />
                ))}
              </div>
              <p className="text-white/60 text-xs line-clamp-2">{testimonial.content}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
