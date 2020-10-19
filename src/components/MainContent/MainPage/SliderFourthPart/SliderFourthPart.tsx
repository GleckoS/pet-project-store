import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'
import Button from "../../../../common/selectors/Button";

const newsTitle = "Last Day",
    newsText = "FREE SHIPPING ON $50*",
    newsButton = "USE CODE J56S3X",
    informTitle = "DEAL OF THE DAY",
    informText = "WHITE COLLECTION FROM $15.90",
    informButton = "SHOP NOW",
    sliderTitle = "BROWSE BY TYPE"

const backgroundURL = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-aside-270x380.jpg",
    newsInformImg = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/deal-bg-870x299.jpg"

const SliderFourthPart = (props: any) => {

    const DivMainPageInnerWrapper = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding-top: 5px;
`
    const NewsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
    const LeftContainer = styled.div`
    width: 270px;
    height: 380px;
    position: relative;
    text-align: center;
`
    const NewsBackGround = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
    border-radius: 6px;
`
    const NewsTitle = styled.h5`
    font-size: 11px;
    margin: 100px 0 0 0;
`
    const NewsText = styled.p`
    padding: 0 20px;
    margin-top: 10px;
    font-size: 26px;
    font-weight: 200;
`
    const NewsButton = styled(Button)`
    font-weight: 700;
    letter-spacing: .8px;
    padding: 12px 20px;
`
    const RightContainer = styled.div`
    position: relative;
`
    const TimerImage = styled.img`
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
`
    const TimerInformWrapper = styled.div`
    background-color: #E8CABA;
    position: absolute;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    bottom: 0;
    height: 81px;
    width: 870px;
`
    const TimerTitle = styled.h5`
    color: #ffffff;
    font-size: 14px;
    font-weight: 800;
    margin: 20px 0 0 15px;
`
    const TimerText = styled.p`
    color: #ffffff;
    margin: 0 0 0 15px;
    font-size: 22px;
    font-weight: 600;
 
`
    const TimerButton = styled(Button)`
    position: absolute;
    right: 20px;
    top: 26px;
    background-color: #333333;
    margin: 0;
    &:hover{
        background-color: #000000;
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
    const CategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    transition: .3s ease-in-out;
`
    const CategoryItem = styled.a`
    width: 168px;
    height: 103px;
    border: 1px solid #e0e0e0;
    text-align: center;
    color: #000000;
    font-size: 12px;
    line-height: 103px;
    & :hover{
        background-color: #E8CABA;
        color: #ffffff;
    }
    & :only-child{
        margin: 0;
    }
`

    return (
        <DivMainPageInnerWrapper>
            <NewsContainer>
                <LeftContainer>
                    <NewsBackGround src={backgroundURL}/>
                    <NewsTitle>{newsTitle}</NewsTitle>
                    <NewsText>{newsText}</NewsText>
                    <NewsButton href="#">{newsButton}</NewsButton>
                </LeftContainer>
                <RightContainer>
                    <TimerImage src={newsInformImg}/>
                    <TimerInformWrapper>
                        <TimerTitle>{informTitle}</TimerTitle>
                        <TimerText>{informText}</TimerText>
                        <TimerButton>{informButton}</TimerButton>
                    </TimerInformWrapper>
                </RightContainer>
            </NewsContainer>
            <CategoryContainer>
                <CategoryTitleWrapper>
                    <p>{sliderTitle}</p>
                </CategoryTitleWrapper>
                <CategoryWrapper>
                    {props.SliderFourthPartData.map((dialog: { [key: string]: string }) =>
                        <CategoryItem href={dialog.link}>
                            <h4>{dialog.text}</h4>
                        </CategoryItem>
                    )}
                </CategoryWrapper>
            </CategoryContainer>
        </DivMainPageInnerWrapper>
    )
}
export default SliderFourthPart