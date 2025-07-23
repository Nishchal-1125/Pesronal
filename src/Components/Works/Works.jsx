import React from "react";  
import './Works.css';

const Works = ()=>
{
    return(
        <div className="works" id="works">
            <div className="works-header">
                <span className="works-title">My Contributions</span>
                <span className="works-subtitle">Products I Worked On</span>
            </div>

            <div className="works-content">
                <div className="work-item">
                    <h3>Safaimitra</h3>
                    <p>
                        A waste management product with multiple modules. Worked primarily on the backend, implementing Node.js, Redis caching, WebSocket for live monitoring, and third-party API integrations. Also contributed to the frontend development.
                    </p>
                </div>

                <div className="work-item">
                    <h3>CRM In-House</h3>
                    <p>
                        A personal product for company purposes consisting of several modules like lead creation, quotations, invoice generation, transaction records, and maintaining logs and roles at specific levels. Worked as a Full Stack Developer.
                    </p>
                </div>

                <div className="work-item">
                    <h3>CRM SaaS</h3>
                    <p>
                        A global project designed for multiple clients, allowing each to manage their own users and leads. Features include proper logs, call and email integration, webhook implementation for real-time data, and WebSocket for real-time status updates using rooms.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Works