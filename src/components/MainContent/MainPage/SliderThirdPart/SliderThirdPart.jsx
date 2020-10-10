import React from "react";
import style from "./SliderThirdPart.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderThirdPart = () => {
    const settings = {
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false
    };
    return (
        <div className={style.mainPage_innerWrapper}>
            <Slider {...settings}>
                <div className={style.mainPage_slider_Item}>
                    <a href="#">
                        <img
                            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-1-240x200.png"/>
                        <h3 className={style.mainPage_slider_text}>PUSH-UP</h3>
                        <button href="#" className={style.mainPage_slider_button}>SHOP NOW</button>
                    </a>
                </div>
                <div className={style.mainPage_slider_Item}>
                    <a href="#">
                        <img
                            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-2-240x200.png"/>
                        <h3 className={style.mainPage_slider_text}>PANTIES</h3>
                        <button href="#" className={style.mainPage_slider_button}>SHOP NOW</button>
                    </a>
                </div>
                <div className={style.mainPage_slider_Item}>
                    <a href="#">
                        <img
                            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-3-240x200.png"/>
                        <h3 className={style.mainPage_slider_text}>HOSIERY</h3>
                        <button href="#" className={style.mainPage_slider_button}>SHOP NOW</button>
                    </a>
                </div>
                <div className={style.mainPage_slider_Item}>
                    <a href="#">
                        <img
                            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-4-240x200.png"/>
                        <h3 className={style.mainPage_slider_text}>BRIDAL</h3>
                        <button href="#" className={style.mainPage_slider_button}>SHOP NOW</button>
                    </a>
                </div>
                <div className={style.mainPage_slider_Item}>
                    <a href="#">
                        <img
                            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-5-240x200.png"/>
                        <h3 className={style.mainPage_slider_text}>SLEEP</h3>
                        <button href="#" className={style.mainPage_slider_button}>SHOP NOW</button>
                    </a>
                </div>
                <div className={style.mainPage_slider_Item}>
                    <a href="#">
                        <img
                            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-6-240x200.png"/>
                        <h3 className={style.mainPage_slider_text}>SWIM</h3>
                        <button href="#" className={style.mainPage_slider_button}>SHOP NOW</button>
                    </a>
                </div>
                <div className={style.mainPage_slider_Item}>
                    <a href="#">
                        <img
                            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-7-240x200.png"/>
                        <h3 className={style.mainPage_slider_text}>STOCKINGS</h3>
                        <button href="#" className={style.mainPage_slider_button}>SHOP NOW</button>
                    </a>
                </div>
                <div className={style.mainPage_slider_Item}>
                    <a href="#">
                        <img
                            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-8-240x200.png"/>
                        <h3 className={style.mainPage_slider_text}>ACCESSORIES</h3>
                        <button href="#" className={style.mainPage_slider_button}>SHOP NOW</button>
                    </a>
                </div>
            </Slider>
        </div>
    )
}

export default SliderThirdPart