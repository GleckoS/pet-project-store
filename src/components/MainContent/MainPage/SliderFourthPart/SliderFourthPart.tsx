import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'
import {Button, PageContainer} from "../../../../common/selectors/StyledComponents";
import Slider from "react-slick";

const newsTitle = "Last Day",
    newsText = "FREE SHIPPING ON $50*",
    newsButton = "USE CODE J56S3X",
    informTitle = "DEAL OF THE DAY",
    informText = "WHITE COLLECTION FROM $15.90",
    informButton = "SHOP NOW",
    sliderTitle = "BROWSE BY TYPE"

const backgroundURL = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-aside-270x380.jpg",
    newsInformImg = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/deal-bg-870x299.jpg"

const settings = {
    arrows: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 1196,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 988,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const Wrapper = styled(PageContainer)`
    padding-top: 5px;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 764px){
        display: block;
    }
`
const Left = styled.div`
    width: 270px;
    height: 380px;
    position: relative;
    text-align: center;
    @media (max-width: 1196px) {
        width: 212px;
        height: 300px;
    }
    @media(max-width: 988px){
        width: 220px;
        height: 310px;
        margin: 0 15px;
    }
    @media(max-width: 764px){
        margin: 0 auto 30px;
    }
`
const NewsBackGround = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
    border-radius: 6px;
    width: 100%;
    height: 100%;
`
const NewsTitle = styled.h5`
    font-size: 11px;
    margin: 100px 0 0 0;
    @media(max-width: 1196px){ 
        margin: 75px 0 0 0;
        font-weight: 800;
    }
    @media(max-width: 764px){
        margin: 0;
        padding: 75px 0 0;
    }
`
const NewsText = styled.p`
    padding: 0 20px;
    margin-top: 10px;
    font-size: 26px;
    font-weight: 200;
    @media(max-width: 1196px){
        font-size: 18px;
        font-weight: 400;
        margin-top: 5px;
    }
`
const NewsButton = styled(Button)`
    font-weight: 700;
    letter-spacing: .8px;
    padding: 12px 20px;
`
const Right = styled.div`
    position: relative;
    @media (max-width: 1196px) {
        width: 700px;
        height: 300px;
    }
    @media(max-width: 988px){
        width: 470px;
        height: 310px;
        margin: 0 15px;
    }
    @media(max-width: 764px){
        max-width: 100%;
        width: auto;
        height: auto;
    }
`
const TimerImage = styled.img`
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    @media (max-width: 1196px) {
        max-width: 700px;
        height: 240px;
    }
    @media(max-width: 988px){
        max-width: 470px;
        height: 161px;
    }
    @media(max-width: 764px){
        max-width: 100%;
        height: auto;
    }
`
const TimerInformWrapper = styled.div`
    background-color: #E8CABA;
    position: absolute;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    bottom: 0;
    height: 81px;
    width: 870px;
    @media (max-width: 1196px) {
        width: 700px;
        height: 60px;
    }
    @media(max-width: 988px){
        width: 470px;
        height: 149px;
    }
    @media(max-width: 764px){
        width: calc(100% - 58px);
        height: 40px;
        padding: 19px 29px 23px 29px;
        position: relative;
        margin-top: -10px;
    }
`
const TimerTitle = styled.h5`
    color: #ffffff;
    font-size: 14px;
    font-weight: 800;
    margin: 15px 0 0 15px;
    @media(max-width: 1196px){
        font-size: 12px;
        line-height: 10px;
    }
    @media(max-width: 988px){
        text-align: left;
        margin: 60px 0 0 15px;
    }
    @media(max-width: 764px){
        margin: 0;
    }
`
const TimerText = styled.p`
    color: #ffffff;
    margin: 0 0 0 15px;
    font-size: 22px;
    font-weight: 600;
    @media(max-width: 1196px){
        font-size: 18px;
    }
    @media(max-width: 988px){
        text-align: left;
        font-size: 16px;
    }
    @media(max-width: 764px){
        margin: 0;
        width: 68%;
    }
`
const TimerButton = styled(Button)`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #333333;
    margin: 0;
    &:hover{
        background-color: #000000;
    }
    @media(max-width: 1196px){ 
    }
`
const CategoryContainer = styled.div`
    padding: 30px 0;
`
const CategoryTitleWrapper = styled.div`
    text-align: center;
    font-size: 12px;
    letter-spacing: .7px;
`
const CategoryItem = styled.a`
    max-width: 168px;
    height: 103px;
    border: 1px solid #e0e0e0;
    text-align: center;
    color: #000000;
    font-size: 12px;
    line-height: 103px;
    position: relative;
    & :hover{
        background-color: #E8CABA;
        border: none;
        color: #ffffff;
    }
    & :only-child{
        text-align: center;
        margin: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;
        width: 100%;
    }
`

const SliderFourthPart = (props: any) => {
    return (
        <Wrapper>
            <Container>
                <Left>
                    <NewsBackGround src={backgroundURL}/>
                    <NewsTitle>{newsTitle}</NewsTitle>
                    <NewsText>{newsText}</NewsText>
                    <NewsButton to="/">{newsButton}</NewsButton>
                </Left>
                <Right>
                    <TimerImage src={newsInformImg}/>
                    <TimerInformWrapper>
                        <TimerTitle>{informTitle}</TimerTitle>
                        <TimerText>{informText}</TimerText>
                        <TimerButton to="/">{informButton}</TimerButton>
                    </TimerInformWrapper>
                </Right>
            </Container>
            <CategoryContainer>
                <CategoryTitleWrapper>
                    <p>{sliderTitle}</p>
                </CategoryTitleWrapper>
                <Slider {...settings}>
                    {props.SliderData.map((dialog: {[key: string]: string }) =>
                        <CategoryItem href={dialog.link}>
                            <h4>{dialog.text}</h4>
                        </CategoryItem>
                    )}
                </Slider>
            </CategoryContainer>
        </Wrapper>
    )
}
export default SliderFourthPart