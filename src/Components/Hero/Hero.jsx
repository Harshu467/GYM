import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <Header/>
            <div className="ad">
                <div></div>
                <span>The Best Fitness Club in Town</span>
            </div>
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>
                        Ideal Body
                    </span>
                </div>
                <div className="span">
                    <span>
                        We will help you to shape and build your ideal body and live up your life to fullest
                    </span>
                </div>
            </div>
        </div>
        <div className="hero-right">Hero Right</div>
    </div>
  )
}

export default Hero
