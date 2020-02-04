import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Styles from './Styles/slider.module.css'

class SimpleSlider extends Component {

  render() {
    var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)

    };
    return (
      <div>
        <Slider {...settings}>
          <div className={Styles.circles}>
            <img src={require('./Resources/slack 1.png')} alt="slack"  className={Styles.images}/>
          </div>
          <div  className={Styles.circles}>
            <img src={require('./Resources/git 1.png')} alt="git" className={Styles.images}/>
          </div>
          <div className={Styles.circles}>
            <img src={require('./Resources/hackerearth 1.png')} alt="hacker earth" className={Styles.images}/>
          </div>
          <div  className={Styles.circles}>
            <img src={require('./Resources/ieeecsmainlogo.png')} alt="selfmade" className={Styles.images}/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider
