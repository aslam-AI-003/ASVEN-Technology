import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaGlobe, FaMobileAlt, FaLaptopCode, FaPalette, FaRobot, FaBullhorn,
  FaStore, FaUtensils, FaShoppingCart, FaUser, FaFileAlt,
  FaAndroid, FaApple, FaTruck, FaCalendarAlt,
  FaFileInvoiceDollar, FaUsersCog, FaWarehouse, FaCogs,
  FaPaintBrush, FaImage, FaShareAlt, FaFingerprint,
  FaComments, FaWhatsapp, FaTachometerAlt, FaBrain,
  FaInstagram, FaFacebook, FaSearch, FaGoogle
} from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  const serviceCategories = [
    {
      title: 'Website Development',
      icon: FaGlobe,
      description: 'Custom websites that convert visitors into customers',
      services: [
        { icon: FaStore, name: 'Business Websites', desc: 'Professional corporate web presence' },
        { icon: FaUtensils, name: 'Restaurant Websites', desc: 'Online menus & reservation systems' },
        { icon: FaShoppingCart, name: 'Ecommerce Websites', desc: 'Full-featured online stores' },
        { icon: FaUser, name: 'Portfolio Websites', desc: 'Showcase your work beautifully' },
        { icon: FaFileAlt, name: 'Landing Pages', desc: 'High-converting campaign pages' },
      ],
    },
    {
      title: 'Mobile App Development',
      icon: FaMobileAlt,
      description: 'Native & cross-platform mobile applications',
      services: [
        { icon: FaAndroid, name: 'Android Apps', desc: 'Native Android development' },
        { icon: FaApple, name: 'iOS Apps', desc: 'Native iOS development' },
        { icon: FaTruck, name: 'Food Delivery Apps', desc: 'Complete delivery solutions' },
        { icon: FaShoppingCart, name: 'Ecommerce Apps', desc: 'Mobile shopping experiences' },
        { icon: FaCalendarAlt, name: 'Booking Applications', desc: 'Appointment & reservation apps' },
      ],
    },
    {
      title: 'Software Development',
      icon: FaLaptopCode,
      description: 'Custom software solutions for your business',
      services: [
        { icon: FaFileInvoiceDollar, name: 'Billing Software', desc: 'Invoice & billing management' },
        { icon: FaUsersCog, name: 'CRM Systems', desc: 'Customer relationship management' },
        { icon: FaCogs, name: 'ERP Software', desc: 'Enterprise resource planning' },
        { icon: FaWarehouse, name: 'Inventory Management', desc: 'Stock & warehouse solutions' },
        { icon: FaLaptopCode, name: 'Custom Software', desc: 'Tailored business applications' },
      ],
    },
    {
      title: 'UI/UX & Designing',
      icon: FaPalette,
      description: 'Creative designs that captivate your audience',
      services: [
        { icon: FaPaintBrush, name: 'Logo Design', desc: 'Memorable brand identities' },
        { icon: FaImage, name: 'Posters & Banners', desc: 'Eye-catching marketing materials' },
        { icon: FaShareAlt, name: 'Social Media Creatives', desc: 'Engaging social content' },
        { icon: FaFingerprint, name: 'Brand Identity', desc: 'Complete branding packages' },
        { icon: FaPalette, name: 'UI Design', desc: 'Beautiful user interfaces' },
      ],
    },
    {
      title: 'AI & Automation',
      icon: FaRobot,
      description: 'Smart solutions powered by artificial intelligence',
      services: [
        { icon: FaComments, name: 'AI Chatbots', desc: 'Intelligent customer support' },
        { icon: FaWhatsapp, name: 'WhatsApp Automation', desc: 'Automated messaging systems' },
        { icon: FaTachometerAlt, name: 'Smart Dashboards', desc: 'Real-time analytics & insights' },
        { icon: FaBrain, name: 'AI Business Tools', desc: 'AI-powered productivity' },
        { icon: FaRobot, name: 'Process Automation', desc: 'Workflow automation solutions' },
      ],
    },
    {
      title: 'Digital Marketing',
      icon: FaBullhorn,
      description: 'Grow your business with strategic marketing',
      services: [
        { icon: FaInstagram, name: 'Instagram Branding', desc: 'Build your IG presence' },
        { icon: FaFacebook, name: 'Facebook Ads', desc: 'Targeted ad campaigns' },
        { icon: FaSearch, name: 'SEO Optimization', desc: 'Rank higher on search engines' },
        { icon: FaGoogle, name: 'Google Business', desc: 'Local business optimization' },
        { icon: FaBullhorn, name: 'Social Media Marketing', desc: 'Complete SMM solutions' },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="section-title mt-4">
            Smart Solutions for <span className="gradient-text">Smart Businesses</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital services to transform your business and accelerate growth
          </p>
        </motion.div>

        {/* Service Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {serviceCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? 'gradient-bg text-white'
                  : 'glass-card text-white/70 hover:text-white'
              }`}
            >
              <category.icon className="text-lg" />
              <span className="font-medium text-sm">{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-4">
              {(() => {
                const IconComponent = serviceCategories[activeCategory].icon;
                return <IconComponent className="text-white text-2xl" />;
              })()}
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              {serviceCategories[activeCategory].title}
            </h3>
            <p className="text-white/60">{serviceCategories[activeCategory].description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {serviceCategories[activeCategory].services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass-card-hover p-5 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <service.icon className="text-blue-500 text-xl" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{service.name}</h4>
                <p className="text-white/50 text-xs">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Services Grid (Optional Overview) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12"
        >
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`glass-card p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeCategory === index ? 'border-blue-500/50' : ''
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                activeCategory === index ? 'gradient-bg' : 'bg-white/5'
              }`}>
                <category.icon className={`text-xl ${activeCategory === index ? 'text-white' : 'text-blue-500'}`} />
              </div>
              <h4 className="font-medium text-sm">{category.title}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
