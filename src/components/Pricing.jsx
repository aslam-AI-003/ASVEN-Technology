import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaCheck, FaTimes, FaStar, FaCrown, FaRocket } from 'react-icons/fa';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billingCycle, setBillingCycle] = useState('project');

  const plans = [
    {
      name: 'Basic',
      icon: FaStar,
      description: 'Perfect for startups and small businesses',
      price: '₹15,000',
      period: 'Starting from',
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        { name: 'Single Page Website', included: true },
        { name: 'Mobile Responsive Design', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: '3 Months Support', included: true },
        { name: 'Custom Features', included: false },
        { name: 'Admin Dashboard', included: false },
        { name: 'Database Integration', included: false },
      ],
    },
    {
      name: 'Professional',
      icon: FaCrown,
      description: 'Ideal for growing businesses',
      price: '₹35,000',
      period: 'Starting from',
      color: 'from-orange-500 to-yellow-500',
      popular: true,
      features: [
        { name: 'Multi-Page Website/App', included: true },
        { name: 'Mobile Responsive Design', included: true },
        { name: 'Advanced Contact Forms', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Full SEO Optimization', included: true },
        { name: '6 Months Support', included: true },
        { name: 'Custom Features', included: true },
        { name: 'Admin Dashboard', included: true },
        { name: 'Database Integration', included: false },
      ],
    },
    {
      name: 'Enterprise',
      icon: FaRocket,
      description: 'Complete solution for large businesses',
      price: '₹75,000+',
      period: 'Custom Quote',
      color: 'from-purple-500 to-pink-500',
      popular: false,
      features: [
        { name: 'Full Custom Development', included: true },
        { name: 'Mobile Apps (iOS & Android)', included: true },
        { name: 'Advanced Integrations', included: true },
        { name: 'Payment Gateway Setup', included: true },
        { name: 'Complete SEO & Marketing', included: true },
        { name: '12 Months Support', included: true },
        { name: 'Custom Features', included: true },
        { name: 'Advanced Admin Dashboard', included: true },
        { name: 'Database & Cloud Setup', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Pricing Plans</span>
          <h2 className="section-title mt-4">
            Affordable <span className="gradient-text">Packages</span>
          </h2>
          <p className="section-subtitle">
            Transparent pricing with no hidden costs. Choose a plan that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="gradient-bg px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`glass-card h-full overflow-hidden ${plan.popular ? 'border-orange-500/50' : ''}`}>
                {/* Header */}
                <div className={`p-6 bg-gradient-to-br ${plan.color} relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <plan.icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-white/50 text-sm mt-1">{plan.period}</p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <FaCheck className="text-green-500 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-white/30 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-white/80' : 'text-white/30'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`block text-center mt-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'gradient-bg text-white hover:shadow-lg hover:shadow-orange-500/30'
                        : 'border border-white/20 text-white hover:border-orange-500 hover:text-orange-500'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <a href="#contact" className="btn-secondary inline-flex items-center space-x-2">
            <span>Request Custom Quote</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
