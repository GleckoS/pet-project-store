let initialSliderState = {
    text: "NEW IN",
    SliderData: [
        {
            text: "Viviana Lingerie",
            price: "$19.95",
            img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-58-270x280.png",
            hoverImg: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-59-270x280.png",
            new: true,
            discount: false,
            featured: false,
            bestsellers: false
        },
        {
            text: "Saskiia Lingerie",
            price: "$17.00",
            img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-49-270x280.png",
            hoverImg: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-51-270x280.png",
            new: true,
            discount: true,
            featured: false,
            bestsellers: false
        },
        {
            text: "Odessa Lingerie",
            price: "$35.00",
            img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-46-270x280.png",
            hoverImg: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-48-270x280.png",
            new: true,
            discount: false,
            featured: false,
            bestsellers: true
        },
        {
            text: "Iana Lingerie ",
            price: "$72.00",
            img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-28-270x280.png",
            hoverImg: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-28-270x280.png",
            new: false,
            discount: false,
            featured: false,
            bestsellers: false
        },
        {
            text: "Grace Lingerie Nude",
            price: "$50.00",
            img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-25-270x280.png",
            hoverImg: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-26-270x280.png",
            new: false,
            discount: false,
            featured: false,
            bestsellers: true
        },
        {
            text: "Adlina Lingerie",
            price: "$19.20",
            img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-1-270x280.png",
            hoverImg: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-3-270x280.png",
            new: false,
            discount: true,
            featured: true,
            bestsellers: false
        }
    ]
}

const SliderThirdPartReducer = (state = initialSliderState, action) => {

    return state
}

export default SliderThirdPartReducer