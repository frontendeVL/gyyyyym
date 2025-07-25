import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
const Reasons = () => {
  return (
      <div className="Reasons" id='reasons'>
        <div className="left-r">
          <img src={image1} alt="Image1" />
          <img src={image2} alt="Image2" />
          <img src={image3} alt="Image3" />
          <img src={image4} alt="Image4" />
        </div>
        <div className="right-r">
          <span>some reasons</span>

          <div>
            <span className='stroke-text'>why</span>
              <span> choose us?</span>
          </div>

          <div className='details-r'>
          <div>
            <img src={tick} alt="Tick img"/>
            <span>OVER 100 EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="Tick img"/>
            <span>TRAIN SMAETER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="Tick img"/>
            <span>1 FREE PROGRAM FOR A NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="Tick img"/>
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{
          color: 'var(--gray)', 
          fontWeight: 'normal',
        }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt=""/>
          <img src={adidas} alt=""/>
          <img src={nike} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Reasons