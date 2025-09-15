import React from 'react';
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Second from "../../img/secondimage.jpeg"
import fourth from "../../img/fourth.jpeg"
import fifth from "../../img/fifth.jpeg"
import third from "../../img/third_image.jpeg"
import 'swiper/css'

const Portfolio = () => {
    const projects = [
        // { 
        //     id: 1, 
        //     image: First, 
        //     title: "E-Commerce Platform", 
        //     description: "Full-stack e-commerce solution with React & Node.js",
        //     tech: ["React", "Node.js", "MongoDB"]
        // },
        { 
            id: 2, 
            image: Second, 
            title: "Task Management Web App", 
            description: "Collaborative task management with records managing",
            tech: ["React", "Node.js", "Express", "MongoDB"]
        },
        { 
            id: 3, 
            image: third, 
            title: "Recipe Sharing App", 
            description: "Making simple app for recipee of dishes withy recycler view", 
            tech: ["Android ","java", "XML"]
        },
        { 
            id: 4, 
            image: fourth, 
            title: "E-commerce static app Dashboard", 
            description: "Making a simple session based(data manage) dashboard for e-commerce",
            tech: ["JavaScript",  "CSS3"]
        },
        { 
            id: 5, 
            image: fifth, 
            title: "Gender and age prediction", 
            description: "Making use of data set and open CV for prediction",
            tech: ["python", "open cv", "tensorflow"]
        }
    ];

    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio-header">
                <span className="port-title">Recent Projects</span>
                <span className="port-subtitle">Portfolio</span>
                <p className="port-description">
                    Explore my latest work showcasing modern web development techniques and creative solutions
                </p>
            </div>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                loop={true}
                className="portfolio-slider"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="tech-stack">
                                            {project.tech.map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="project-buttons">
                                            <button className="btn-view">View Project</button>
                                            <button className="btn-code">Source Code</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Portfolio