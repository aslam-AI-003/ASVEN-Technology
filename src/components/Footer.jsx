import { motion } from 'framer-motion';
import { 
  FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Website Development', href: '#services' },
      { name: 'Mobile App Development', href: '#services' },
      { name: 'Software Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Projects', href: '#projects' },
      { name: 'Our Process', href: '#process' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaInstagram, link: '#', name: 'Instagram' },
    { icon: FaFacebook, link: '#', name: 'Facebook' },
    { icon: FaLinkedin, link: '#', name: 'LinkedIn' },
    { icon: FaTwitter, link: '#', name: 'Twitter' },
    { icon: FaYoutube, link: '#', name: 'YouTube' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Motivational Quote Section */}
      <div className="py-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl md:text-8xl text-blue-500/20 font-serif mb-4">"</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Innovation starts with <span className="gradient-text">one idea.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Let's turn your idea into reality. Partner with Asven Technology today.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Start Your Journey</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="#home" className="flex items-center mb-6">
                <img 
                  src="/logo.png" 
                  alt="Asven Technology" 
                  className="h-12 w-auto"
                />
              </a>
              <p className="text-white/50 mb-6 leading-relaxed">
                A next-generation digital solutions company focused on transforming businesses through 
                innovative software, mobile applications, website development, AI-powered solutions, 
                branding, and digital automation.
              </p>
              <div className="space-y-3">
                <a href="tel:+917904302297" className="flex items-center space-x-3 text-white/60 hover:text-blue-500 transition-colors">
                  <FaPhone className="text-blue-500" />
                  <span>+91 79043 02297</span>
                </a>
                <a href="mailto:contact@asventechnology.com" className="flex items-center space-x-3 text-white/60 hover:text-blue-500 transition-colors">
                  <FaEnvelope className="text-blue-500" />
                  <span>contact@asventechnology.com</span>
                </a>
                <div className="flex items-center space-x-3 text-white/60">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/50 hover:text-blue-500 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/50 hover:text-blue-500 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/50 hover:text-blue-500 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-500 transition-all"
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-white/50 text-sm">
                  Asven Technology – <span className="gradient-text font-semibold">Complete Digital Solutions</span>
                </p>
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                <FaArrowUp className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} Asven Technology. All rights reserved.
              </p>
              <p className="text-white/40 text-sm flex items-center">
                Made with <FaHeart className="text-blue-500 mx-1" /> in India | From Concept to Creation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
