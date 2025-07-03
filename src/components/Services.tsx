import React from 'react';
import { Brain, Code, Database, Smartphone, Cloud, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions including natural language processing, computer vision, and predictive analytics.',
      features: ['Neural Networks', 'Deep Learning', 'Model Training', 'AI Integration']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Custom Software Development',
      description: 'Full-stack development services creating scalable, robust applications tailored to your needs.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      features: ['Data Mining', 'Business Intelligence', 'Reporting Systems', 'Data Visualization']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with cutting-edge features and performance.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure, migration, and optimization services for maximum scalability.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Performance Optimization']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#004aad]">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive technology solutions designed to accelerate your digital transformation 
              and drive sustainable growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-[#004aad]/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#004aad]/20 rounded-2xl text-[#004aad] mb-6 group-hover:bg-[#004aad] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#004aad] rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <a
                      href="#contact"
                      className="text-[#004aad] hover:text-blue-400 font-medium transition-colors duration-200"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">Ready to transform your business with our solutions?</p>
            <a
              href="#contact"
              className="bg-[#004aad] hover:bg-[#0056cc] text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium text-lg hover:shadow-lg hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;