import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
const Testimonials = () => {
    const[select,setselect]=useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className='testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>Say About us</span>
            <span>{testimonialsData[select].review}</span>
            <span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[select].name}
                </span>{" "}
                -{testimonialsData[select].status}
            </span>
        </div>
        <div className="right-t">
            <div ></div>
            <div ></div>
            <img src={testimonialsData[select].image} alt="" />    
            <div className="arrows">
                <img src={leftArrow} 
                onClick={()=>{
                    select===0 
                    ? setselect(tLength-1)
                    : setselect((prev)=> prev-1);
                }}
                alt="" />
                <img src={rightArrow} 
                onClick={()=>{
                    select===tLength-1
                    ? setselect(0)
                    : setselect((prev)=> prev+1);
                }}
                alt="" />
            </div>
        </div>      
    </div>
  )
}

export default Testimonials
