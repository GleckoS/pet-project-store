import React from "react";
import style from "./SliderFirstPart.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderFirstPart = (props) => {
    const settings = {
        dots: true,
        arrows: false,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    };
    return(
        <div className={style.mainPage_innerWrapper}>
            <Slider {...settings}>
                <div className={style.mainPage_slider_firstItem}>
                    <h3 className={style.mainPage_slider_text}>The Hottest Collection</h3>
                    <a href="#" className={style.mainPage_slider_button}>SHOP COLLECTION</a>
                </div>
                <div className={style.mainPage_slider_secondItem}>
                    <h3 className={style.mainPage_slider_text}>Summer New Arrivals</h3>
                    <a href="#" className={style.mainPage_slider_button}>SHOP COLLECTION</a>
                </div>
                <div className={style.mainPage_slider_thirdItem}>
                    <h3 className={style.mainPage_slider_text}>Only Top Lingerie</h3>
                    <a href="#" className={style.mainPage_slider_button}>SHOP COLLECTION</a>
                </div>
            </Slider>
        </div>
    )
}

export default SliderFirstPart