import React from 'react'
import './style/About.css'
import aboutPic from '../assets/images/about.jpg'

const AboutUs = () => {
    return (
        <div className="about">
            <div className="text">
                <h1 className="my-4">درباره ما</h1>
                <p>توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات 
                توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات 
                توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات 
                توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات 
                توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات 
                توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات 
                توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات 
                توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات 
                </p>
            </div>
            <div>
                <img src={aboutPic} 
                alt="about us" 
                width="550" height="400"
                className="pic"
                // style={{objectFit: "cover"}}
                />
            </div>
        </div>
    )
}

export default AboutUs;