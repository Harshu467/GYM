import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <Header />
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
                <div className="figures">
                    <div>
                        <span>+145 </span>
                        <span>Expert Coach</span>
                    </div>
                    <div>
                        <span>+987 </span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+55 </span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="hero-right">
                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt="Heart"/>
                    <span>Heart Rate </span><span>116 bpm</span>
                </div>
                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back' />
                <div className="calories">
                    <img src={calories} alt="" />
                    <span>Calories Burned</span><span> 220 kcal</span>
                </div>
            </div>
        </div>
    )
}

export default Hero
