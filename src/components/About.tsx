import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Precision',
      description: 'Every line of code is crafted with meticulous attention to detail and purpose.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We work closely with clients to understand their vision and exceed expectations.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We deliver solutions that set new standards in performance and reliability.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We leverage cutting-edge technologies to solve complex challenges.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-[#004aad]">Praxos.tech</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company specializing in AI-powered software solutions 
              that drive digital transformation and business growth.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between traditional software development 
                and artificial intelligence, Praxos.tech has emerged as a trusted partner for 
                businesses seeking to harness the power of technology.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our team of expert developers, AI specialists, and strategists work together to 
                create solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-[#004aad] rounded"></div>
                <span className="text-[#004aad] font-medium">Innovating Since 2019</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#004aad]/20 to-blue-400/20 rounded-2xl p-8 backdrop-blur-sm border border-[#004aad]/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#004aad] rounded-full"></div>
                    <span className="text-white font-medium">AI-First Approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-medium">Scalable Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#004aad] rounded-full"></div>
                    <span className="text-white font-medium">Client-Centric Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-medium">Future-Ready Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#004aad]/20 rounded-2xl text-[#004aad] mb-4 group-hover:bg-[#004aad] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;