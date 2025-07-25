import React from "react";

const WorksNew = () => {
    const projects = [
        {
            title: "Safaimitra",
            category: "Waste Management Platform",
            description: "A comprehensive waste management product with multiple modules. Worked primarily on the backend, implementing Node.js, Redis caching, WebSocket for live monitoring, and third-party API integrations. Also contributed to the frontend development.",
            technologies: ["Node.js", "Express", "MongoDB", "Redis", "WebSocket", "React.js"],
            features: ["Real-time monitoring", "Cache management", "API integrations", "Multi-module architecture"]
        },
        {
            title: "CRM In-House",
            category: "Internal Management System",
            description: "A personal product for company purposes consisting of several modules like lead creation, quotations, invoice generation, transaction records, and maintaining logs and roles at specific levels. Worked as a Full Stack Developer.",
            technologies: ["Node.js", "Express", "MongoDB", "React.js", "JWT", "Role-based Auth"],
            features: ["Lead management", "Invoice generation", "Transaction tracking", "Role-based access", "Audit logs"]
        },
        {
            title: "CRM SaaS",
            category: "Global SaaS Platform",
            description: "A global project designed for multiple clients, allowing each to manage their own users and leads. Features include proper logs, call and email integration, webhook implementation for real-time data, and WebSocket for real-time status updates using rooms.",
            technologies: ["Node.js", "Express", "MongoDB", "WebSocket", "Webhooks", "Email API", "Multi-tenant"],
            features: ["Multi-tenant architecture", "Real-time updates", "Email integration", "Webhook implementation", "Call management", "User management"]
        }
    ];

    return (
        <section id="works" className="section-padding bg-white">
            <div className="container-max">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        My Contributions to{' '}
                        <span className="text-gradient">Products</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real-world projects where I've made significant impact through full-stack development and innovative solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Project Header */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-orange-400 rounded-full group-hover:scale-125 transition-transform" />
                                </div>
                                <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                                    {project.category}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-gray-800">Key Features</h4>
                                <ul className="space-y-1">
                                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-orange-400 rounded-full flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                    {project.features.length > 3 && (
                                        <li className="text-xs text-gray-500 pl-4">
                                            +{project.features.length - 3} more features
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* Project Link/Button */}
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <button className="w-full bg-gradient-to-r from-primary-50 to-orange-50 text-primary-600 font-semibold py-3 px-4 rounded-lg hover:from-primary-100 hover:to-orange-100 transition-all duration-300 group-hover:shadow-md">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Build Something Amazing Together?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Let's discuss your next project and create innovative solutions that drive results.
                        </p>
                        <button className="btn-primary">
                            Start a Project
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksNew;
