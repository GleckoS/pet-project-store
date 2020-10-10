import React from "react";

let initialSliderState = {
    SliderData: [
        {text: "The Hottest Collection", img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/slide-1-1170x584.jpg"},
        {text: "Summer New Arrivals", img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/slide-2-1170x584.jpg"},
        {text: "Only Top Lingerie", img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/slide-3-1170x584.jpg"}
    ],
}

const SliderFirstPartReducer = (state = initialSliderState, action) => {

    return state
}

export default SliderFirstPartReducer