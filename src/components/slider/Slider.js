import React from 'react'

import './Slider.css'
import { Carousel } from 'react-bootstrap'
import pic1 from '../../assets/images/a.jpg'
import pic2 from '../../assets/images/b.jpg'
import pic3 from '../../assets/images/c.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                    />
                    <Carousel.Caption style={{backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "5px"}}>
                    <h3>Apple Tv</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Third slide"
                    />

                    <Carousel.Caption style={{backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "5px"}}>
                    <h3>Apple Watch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                    />

                    <Carousel.Caption style={{backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: "5px"}}>
                    <h3>Beats Headset</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
