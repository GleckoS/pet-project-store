import React, {useState} from "react";
import SliderElement from "../../../../common/components/SliderElement";
import styled from "@emotion/styled";

const sortOptions =
    [
        {
            name: "Default"
        },
        {
            name: "Name(A - Z)"
        },
        {
            name: "Name(Z - A)"
        },
        {
            name: "(Low > High)"
        },
        {
            name: "(High > Low)"
        },
        {
            name: "Rating(Lowest)"
        },
        {
            name: "Rating(Highest)"
        },
        {
            name: "Model(A - Z)"
        },
        {
            name: "Model(Z - A)"
        }
    ]
const showOptions =
    [
        {
            name: "6"
        },
        {
            name: "25"
        },
        {
            name: "50"
        },
        {
            name: "75"
        },
        {
            name: "100"
        },
    ]



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
    width: calc(25% - 30px);
    padding: 0 15px;
    float: left;
    
`
const RightPartContainer = styled.div`
    width: calc(75% - 30px);
    padding: 0 15px;
    float: left;
    height: 100%;
`
const MapWrapper = styled.div`
`
const H4 = styled.h4`
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .8px;
    position: relative;
    width: 100%;
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
const Settings = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 35px;
    padding: 9px 0;
    margin: 30px 0;
    &::after{
        content: "";
        width: 100%;
        height: 1px;
        background-color: #4a4a4a;
        position: absolute;
        top: 0;
    }
    &::before{
        content: "";
        width: 100%;
        height: 1px;
        background-color: #4a4a4a;
        position: absolute;
        bottom: 0;
    }
`
const Sort = styled.div`
    height: 35px;
`
const Pagination = styled.div`
    height: 35px;
`
const ViewChange = styled.button`
    border: none;
    background-color: transparent;
    height: 35px;
    width: 35px;
    padding: 0;
    margin-right: 10px;
    &:hover{
        color: #E8CABA;
    }
`
const Select = styled.select`
    border: none;
    background-color: #f1f1f1;
    padding: 8px 8px;
    border-radius: 4px;
`
const Item = styled.div`
    width: 270px;
    padding: 0 6px;
    float: left;
`

const ProductMainContent = (props:any) => {

    let [show, setShow] =useState("6")

    let Slider = props.items.filter((e: any) => e.id < show)

    const changeShow = (value: string) => {
        setShow(value)
    }

    return (
        <MainContentWrapper>
            <LeftPartContainer>
                <div>
                    <H4>BESTSELLERS</H4>
                </div>
                <div>
                    <SliderElement item={{}}/>
                </div>
            </LeftPartContainer>
            <RightPartContainer>
                <Settings>
                    <Sort>
                        <ViewChange>
                            B
                        </ViewChange>
                        <ViewChange>
                            S
                        </ViewChange>
                        <span>
                            {"Sort By: "}
                            <Select>
                                {sortOptions.map(item =>
                                    <option>{item.name}</option>
                                )}
                            </Select>
                        </span>
                    </Sort>
                    <Pagination>
                        <span>
                            {"Show: "}
                            <Select onChange={(value) => {changeShow(value.target.value)}}>
                                {showOptions.map(item =>
                                    <option value={item.name}>{item.name}</option>
                                )}
                            </Select>
                        </span>
                    </Pagination>
                </Settings>
                <MapWrapper>
                    {Slider.map((item: any) =>
                        <Item>
                            <SliderElement isLogged={props.isLogged} currentUser={props.currentUser} item={item}/>
                        </Item>
                    )}
                </MapWrapper>
            </RightPartContainer>
        </MainContentWrapper>
    )
}

export default ProductMainContent