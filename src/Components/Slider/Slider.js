import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useHistory } from 'react-router'

import './Slider.css'


function Slider() {

    let history = useHistory()
    const handlePath = (path)=>history.push(path)

    const localImagesSlider = [
        {
            img: 'mac-img',
            link: '/computers'
        },
        {
            img: 'iphone',
            link: '/smartphones'
        },
        {
            img: 'imac-test',
            link: '/computers'
        },
        {
            img: 'watchTest',
            link: '/gadgets'
        },
        {
            img: 'airpods',
            link: '/gadgets'
        }];
   
    return (
        <Carousel>

            {localImagesSlider.map(step => (
                <Carousel.Item interval={3000} key={step.img}>
                    <div className={`d-block img-slider w-100 ${step.img}`} onClick={()=>handlePath(step.link)}></div>
                </Carousel.Item>
            ))}

        </Carousel>
    )
}

export default Slider
