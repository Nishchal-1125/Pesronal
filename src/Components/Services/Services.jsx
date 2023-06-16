import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Nishchalresume.pdf'

const Services = () =>

{
    return (

    <div className= "services">
       

{/* Left side elements */}
        <div className="awesome">
            <span >My Awesome </span>
            <span >Services </span>
            <spane>I am a full stack developer and intern at siemens energy
            <br/>
            React js framework
            </spane>
            <a href={Resume} download>

            <button className="button s-button">Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}>

            </div>

        </div>
        {/* Right side elements */}

        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading= {'Design'}
                detail= {"python, django,react"}
                />
            </div>
            <div style={{top: "12rem", left: "-4rem"}}>
            <Card 
                emoji = {Glasses}
                heading= {'Design'}
                detail= {"python, django,react"}
                />

            </div>
            <div style={{top: "19rem", left: "25rem"}}>
            <Card 
                emoji = {Humble}
                heading= {'Design'}
                detail= {"python, django,react"}
                />

            </div>
            <div className='blur s-blur2' style= {{background: "var(--purple"}}></div>
            
           

            
          

        </div>
    </div>


    )
    
}

export default Services;