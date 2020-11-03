import React from "react";
import ThirdPartSliderElement from "../../../../common/components/SliderElement";
import styled from "@emotion/styled";

const ProductMainContent = () => {

    const thirdSlider = [
        {
            "text": "Viviana Lingerie",
            "price": "$19.95",
            "img": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-58-270x280.png",
            "hoverImg": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-59-270x280.png",
            "new": true,
            "discount": false,
            "featured": false,
            "bestsellers": false
        },
        {
            "text": "Saskiia Lingerie",
            "price": "$17.00",
            "img": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-49-270x280.png",
            "hoverImg": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-51-270x280.png",
            "new": true,
            "discount": true,
            "featured": false,
            "bestsellers": false
        },
        {
            "text": "Odessa Lingerie",
            "price": "$35.00",
            "img": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-46-270x280.png",
            "hoverImg": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-48-270x280.png",
            "new": true,
            "discount": false,
            "featured": false,
            "bestsellers": true
        },
        {
            "text": "Iana Lingerie ",
            "price": "$72.00",
            "img": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-28-270x280.png",
            "hoverImg": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-28-270x280.png",
            "new": false,
            "discount": false,
            "featured": false,
            "bestsellers": false
        },
        {
            "text": "Grace Lingerie Nude",
            "price": "$50.00",
            "img": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-25-270x280.png",
            "hoverImg": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-26-270x280.png",
            "new": false,
            "discount": false,
            "featured": false,
            "bestsellers": true
        },
        {
            "text": "Adlina Lingerie",
            "price": "$19.20",
            "img": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-1-270x280.png",
            "hoverImg": "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-3-270x280.png",
            "new": false,
            "discount": true,
            "featured": true,
            "bestsellers": false
        }
    ]

    const MainContentWrapper = styled.div`
    height: 1000px;
`
    const LeftPartContainer = styled.aside`
    width: 21%;
    margin-right: 4%;
    float: left;
    
`
    const RightPartContainer = styled.div`
    width: 75%;
    float: right;
    height: 100%;
`
    const MapWrapper = styled.div`
    
    & div{
        float: left;
        padding: 0 10px;
    }
`
    const H4 = styled.h4`
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .8px;
    position: relative;
    width: 90%;
    &::after{
        content: "";
        height: 1px;
        width: 100%;
        background-color: #515151;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`

    return(
        <MainContentWrapper>
            <LeftPartContainer>
                <div>
                    <H4>BESTSELLERS</H4>
                </div>
                <div>
                    <ThirdPartSliderElement />
                </div>
            </LeftPartContainer>
            <RightPartContainer>
                <MapWrapper>
                    {/*{thirdSlider.map(item =>
                        <ThirdPartSliderElement {...item}/>
                    )
                    }*/}
                </MapWrapper>
            </RightPartContainer>
        </MainContentWrapper>
    )
}

export default ProductMainContent