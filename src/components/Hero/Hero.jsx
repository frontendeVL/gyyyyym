import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
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
             In here we wikk help you to shape and build your ideal bode and live up you life
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
      <div className="right-h">right side</div>
    </div>
  )
}

export default Hero