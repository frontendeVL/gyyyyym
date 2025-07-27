import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

import {motion} from 'framer-motion'
const Hero = () => {


  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true: false

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>


        <div className="the-best-ad">
        <motion.div
        initial={{left: mobile? "160px": '238px'}}
        whileInView={{left: '8px'}}
        transition={{...transition, type: 'tween'}}
        ></motion.div>
            <span>The best fitness club in Berlin</span>
        </div>

        {/*Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text' >Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
             In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        {/*figures*/}
        <div className="figures">
          <div>
            <span>+107</span>
            <span>expert coachs</span>
          </div>
            <div>
              <span>+1106</span>
              <span>members joined</span>
            </div>
              <div>
                <span>+50</span>
                <span>fitness programs</span>
              </div>
        </div>

        {/*Hero buttons*/}

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn btn-join-now'>Join Now</button>

        {/*Hero images */}

        <img src={hero_image} alt="Hero image" className="hero-image"/>
        <motion.img 
        
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={{...transition, duration: 4}}

        src={hero_image_back} alt="Hero image back" className="hero-image-back"/> 
      </div>
    </div>
  )
}

export default Hero