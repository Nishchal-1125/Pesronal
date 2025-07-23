import React from 'react';
import './Experience.css'

const Experience= ()=> {
    return(
        <div className='experience' id='experience'>
            <div className='experience-header'>
                <span className='exp-title'>Professional</span>
                <span className='exp-subtitle'>Experience</span>
            </div>
            
            <div className='achievements-container'>
                <div className='achievement'>
                    <div className='circle'>2+</div>
                    <span>Years</span>
                    <span>Experience</span>
                </div>

                <div className='achievement'>
                    <div className='circle'>3+</div>
                    <span>Internships</span>
                    <span>Completed</span>
                </div>

                <div className='achievement'>
                    <div className='circle'>15+</div>
                    <span>Projects</span>
                    <span>Delivered</span>
                </div>

                <div className='achievement'>
                    <div className='circle'>5+</div>
                    <span>Technologies</span>
                    <span>Mastered</span>
                </div>
            </div>

            <div className='experience-details'>
                <div className='exp-item'>
                    <div className='exp-company'>Software Development Intern</div>
                    <div className='exp-duration'>Recent Graduate • Full Stack Development</div>
                    <div className='exp-description'>
                        Specialized in React.js, Node.js, and modern web technologies. 
                        Built responsive web applications with focus on user experience.
                    </div>
                </div>

                <div className='exp-item'>
                    <div className='exp-company'>Dvertex Info Private Limited</div>
                    <div className='exp-duration'>Software Engineer • Feb 2024–Present</div>
                    <div className='exp-location'>Gautam Budh Nagar, Uttar Pradesh</div>
                    <div className='exp-description'>
                        • Spearheaded the development of backend services using Node.js and the Express framework, integrating both SQL and NoSQL databases (MongoDB) to deliver scalable solutions that meet business needs.<br/>
                        • Designed and implemented RESTful APIs for the ”SafaiMitra” SaaS platform, optimizing functionality and addressing complex issues to enhance user experience.<br/>
                        • Enhanced system performance by implementing efficient cache management techniques, integrating WebSocket for live monitoring, and optimizing database indexing for faster query responses.<br/>
                        • Coordinated cross-functional collaboration and managed version control using Git to streamline workflows and ensure smooth development processes.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience