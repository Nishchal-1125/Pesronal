import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Nishchalresume.pdf'

const Services = () => {
    return (
        <div className="services" id="services">
            {/* Left side elements */}
            <div className="services-content">
                <div className="services-header">
                    <span className="services-title">My Awesome</span>
                    <span className="services-subtitle">Services</span>
                    <p className="services-description">
                        I am a full stack developer specializing in modern web technologies 
                        and building scalable applications with clean, efficient code.
                    </p>
                    <div className="cv-download-section">
                        <a href={Resume} download className="cv-download-link">
                            <button className="button cv-button">
                                <span className="button-icon">📄</span>
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>

                {/* Right side elements */}
                <div className="services-cards">
                    <div className="card-wrapper card-1">
                        <Card
                            emoji={HeartEmoji}
                            heading={'Frameworks&Libraries'}
                            detail={'React.js, Node.js,Express'}
                        />
                    </div>

                    <div className="card-wrapper card-2">
                        <Card
                            emoji={Glasses}
                            heading={'Databases'}
                            detail={'MongoDB, MySQL, PostgreSQL'}
                        />
                    </div>

                    <div className="card-wrapper card-3">
                        <Card
                            emoji={Humble}
                            heading={'Key Skills'}
                            detail={'REST APIs, WebSockets, Git, JWT, Ajax'}
                        />
                    </div>

                    <div className="card-wrapper card-4">
                        <Card
                            emoji={Glasses}
                            heading={'Projects'}
                            detail={'Transport System, Drug Recommender, SafaiMitra'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;