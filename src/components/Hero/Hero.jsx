import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header/>


       {/* The best ad*/}
        <div className="the-best-ad">
          <div></div>
            <span>The best fitness club in Berlin</span>
        </div>

        {/*Hero Heading*/}
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
        <button className='btn'>Join Now</button>

        {/*Hero images */}

        <img src={hero_image} alt="Hero image" className="hero-image"/>
        <img src={hero_image_back} alt="Hero image back" className="hero-image-back"/> 
      </div>
    </div>
  )
}

export default Hero