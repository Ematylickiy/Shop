import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './Slider.css'


function Slider() {

    const localImages = ['mac-img','iphone', 'imac-test', 'watchTest','airpods'];
    return (
        <Carousel>

            {localImages.map(image => (
                <Carousel.Item interval={3000} key={image}>
                    <div className={`d-block img-slider w-100 ${image}`}></div>
                </Carousel.Item>
            ))}

        </Carousel>
    )
}

export default Slider
