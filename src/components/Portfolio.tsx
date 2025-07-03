import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'A comprehensive analytics platform that uses machine learning to provide real-time insights and predictive analytics for enterprise clients.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS'],
      category: 'AI/ML',
      link: '#'
    },
    {
      title: 'Smart Healthcare Management System',
      description: 'An integrated healthcare platform featuring AI-driven diagnostics, patient management, and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'OpenAI'],
      category: 'Healthcare',
      link: '#'
    },
    {
      title: 'Intelligent Supply Chain Optimizer',
      description: 'AI-powered supply chain management system that optimizes inventory, predicts demand, and reduces operational costs.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Kubernetes', 'TensorFlow'],
      category: 'Enterprise',
      link: '#'
    },
    {
      title: 'FinTech Mobile Application',
      description: 'Secure mobile banking application with AI-powered fraud detection and personalized financial recommendations.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'ML Kit'],
      category: 'FinTech',
      link: '#'
    },
    {
      title: 'Smart City IoT Platform',
      description: 'Comprehensive IoT platform for smart city management including traffic optimization and environmental monitoring.',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'IoT Core', 'Time Series DB', 'ML'],
      category: 'IoT',
      link: '#'
    },
    {
      title: 'E-commerce Recommendation Engine',
      description: 'Advanced recommendation system using collaborative filtering and deep learning to personalize user experiences.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Redis', 'Elasticsearch', 'Docker'],
      category: 'E-commerce',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#004aad]">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest projects showcasing cutting-edge AI solutions and innovative software development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#004aad]/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#004aad]/20 text-[#004aad] rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.link}
                        className="flex items-center space-x-2 text-[#004aad] hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm font-medium">View Project</span>
                      </a>
                      <a
                        href={project.link}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-medium">Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">Want to see more of our work?</p>
            <a
              href="#contact"
              className="group bg-[#004aad] hover:bg-[#0056cc] text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium text-lg hover:shadow-lg hover:scale-105 inline-flex items-center"
            >
              Let's Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;