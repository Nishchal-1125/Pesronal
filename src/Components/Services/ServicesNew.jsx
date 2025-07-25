import React from 'react';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';

const ServicesNew = () => {
    const services = [
        {
            emoji: HeartEmoji,
            heading: 'Frontend Development',
            detail: 'React.js, Next.js, TypeScript, Tailwind CSS'
        },
        {
            emoji: Glasses,
            heading: 'Backend Development',
            detail: 'Node.js, Express, MongoDB, PostgreSQL'
        },
        {
            emoji: Humble,
            heading: 'Full Stack Solutions',
            detail: 'End-to-end web applications with modern architecture'
        },
        {
            emoji: Glasses,
            heading: 'API Development',
            detail: 'RESTful APIs, GraphQL, WebSocket integration'
        }
    ];

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-max">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                My Awesome{' '}
                                <span className="text-gradient">Services</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                I am a full stack developer specializing in modern web technologies 
                                and building scalable applications with clean, efficient code and 
                                exceptional user experiences.
                            </p>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-800">Frontend</h4>
                                <p className="text-sm text-gray-600">React, Next.js, TypeScript</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-800">Backend</h4>
                                <p className="text-sm text-gray-600">Node.js, Express, Python</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-800">Database</h4>
                                <p className="text-sm text-gray-600">MongoDB, PostgreSQL</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-gray-800">Tools</h4>
                                <p className="text-sm text-gray-600">Git, Docker, AWS</p>
                            </div>
                        </div>

                        {/* Download CV Button */}
                        <div className="pt-4">
                            <button 
                                onClick={() => alert('Resume will be available soon!')}
                                className="group bg-gradient-to-r from-primary-500 to-orange-400 text-white font-semibold py-4 px-8 rounded-full shadow-orange hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3"
                            >
                                <span className="text-2xl">📄</span>
                                <span>Download CV</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Service Cards */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div 
                                    key={index}
                                    className={`
                                        transform transition-all duration-300 hover:scale-105
                                        ${index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-8'}
                                    `}
                                    style={{ 
                                        animationDelay: `${index * 0.2}s`
                                    }}
                                >
                                    <Card
                                        emoji={service.emoji}
                                        heading={service.heading}
                                        detail={service.detail}
                                        className="h-full"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Background Elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-orange-200 rounded-full blur-3xl opacity-30 animate-float" />
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: '3s' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesNew;
