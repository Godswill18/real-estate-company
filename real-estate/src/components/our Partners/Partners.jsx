import React from 'react'
import './partners.css'
// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Partners() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (
    <div className="carousel2">
    <h2>Our Partners</h2>
    <Slider {...settings}>
    <div className="box2">
        <img src="../../assets/img/logoX.jpeg" alt="" />
    </div>
    <div className="box2">
        <img src="../../assets/img/logoY.jpeg" alt="" />
    </div>
    <div className="box2">
        <img src="../../assets/img/logoZ.jpeg" alt="" />
    </div>
    <div className="box2">
        <img src="../../assets/img/logoX.jpeg" alt="" />
    </div>
    <div className="box2">
        <img src="../../assets/img/logoZ.jpeg" alt="" />
    </div>

    </Slider>
    
</div>
  )
}
