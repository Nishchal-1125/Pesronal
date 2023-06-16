import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


const Intro = () =>{
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className="i-name">
                    <span> Hy! I am </span>
                    <span>Nishchal Baluni</span>
                    <span>Web Developer with good quality
                         of designing and skills</span>
                </div>
                <button className='button i-button'>Hire me</button>

                <div className='i-icons'>
                  
                   

                    <a href='https://www.linkedin.com/in/nishchal-baluni-0a7438207/'>
                    <img src={Github} alt=""/></a>
                    <a href='https://www.linkedin.com/in/nishchal-baluni-0a7438207/'>
                    <img src={LinkedIn} alt=""/></a>
                    <a href='https://www.linkedin.com/in/nishchal-baluni-0a7438207/' blank>
                    <img src={Instagram} alt=""/></a>
                </div>


            </div>
            <div className='i-right'>
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={boy} alt=""/>
            <img src={glassesimoji} alt=""/>

            <div style= {{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown}  txt1='Web' txt2='Developer'/>
            </div>

            <div style={{top: '18rem', left:'0rem' }}>
                <FloatingDiv image={thumbup}  txt1='FULL STACK' txt2='Developer'/>
            </div>
            <div className='blur' style={{background: 'rgb(238 210 255'}}></div>

            <div className='blur' style={{background: '#C1F5FF', top: '17rem',
             width:'20rem', height: '11rem', left: '-9rem'}}></div>


            

            </div>
        </div>

    )
}

export default Intro