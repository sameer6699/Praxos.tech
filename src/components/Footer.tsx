import React from 'react';
import { Code, Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'AI & Machine Learning', href: '#services' },
      { name: 'Custom Software Development', href: '#services' },
      { name: 'Mobile App Development', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Portfolio', href: '#portfolio' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: '#' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:contact@praxos.tech' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Code className="h-8 w-8 text-[#004aad]" />
                  <Zap className="h-4 w-4 text-blue-400 absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold text-white">Praxos.tech</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We build intelligent software solutions and state-of-the-art AI technologies 
                that transform businesses and drive innovation in the digital age.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#004aad] hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#004aad] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#004aad] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#004aad] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300">Get the latest insights on AI and software development trends.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#004aad] transition-colors duration-200"
                />
                <button className="bg-[#004aad] hover:bg-[#0056cc] text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="text-gray-400 text-sm">
                <p>&copy; 2024 Praxos.tech. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-[#004aad] text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#004aad] text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-[#004aad] text-sm transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;