import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, 
  FaInstagram, FaFacebook, FaLinkedin, FaTwitter,
  FaPaperPlane, FaUser, FaBuilding
} from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();
    
    // Open mailto link
    const mailtoLink = `mailto:contact@asventechnology.com?subject=New Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    
    alert('Thank you! Your email client will open. Please send the email to complete your inquiry.');
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 79043 02297',
      link: 'tel:+917904302297',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+91 77088 88397',
      link: 'https://wa.me/917708888397',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@asventechnology.com',
      link: 'mailto:info@asventechnology.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaEnvelope,
      title: 'Support',
      value: 'support@asventechnology.com',
      link: 'mailto:support@asventechnology.com',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office',
      value: 'Chennai, Tamil Nadu, India',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    { icon: FaInstagram, link: '#', name: 'Instagram' },
    { icon: FaFacebook, link: '#', name: 'Facebook' },
    { icon: FaLinkedin, link: '#', name: 'LinkedIn' },
    { icon: FaTwitter, link: '#', name: 'Twitter' },
  ];

  const services = [
    'Website Development',
    'Mobile App Development',
    'Software Development',
    'UI/UX Design',
    'AI & Automation',
    'Digital Marketing',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="section-title mt-4">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Ready to transform your business? Reach out to us and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="" className="bg-[#1a1a1a]">Select a Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="bg-[#1a1a1a]">
                      {service}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="glass-card-hover p-5 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <info.icon className="text-white text-xl" />
                  </div>
                  <h4 className="font-semibold text-sm text-white/70">{info.title}</h4>
                  <p className="text-white font-medium">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                  >
                    <social.icon className="text-white/70 hover:text-blue-500 text-xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="glass-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h4 className="font-semibold mb-2">Quick Response Guaranteed</h4>
                <p className="text-white/60 text-sm mb-4">
                  We typically respond within 2-4 hours during business hours. For urgent inquiries, 
                  please reach us via WhatsApp.
                </p>
                <div className="flex items-center space-x-2 text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm">Online Now</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card p-4 h-48 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-blue-500 mx-auto mb-2" />
                  <p className="text-white/60 text-sm">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
