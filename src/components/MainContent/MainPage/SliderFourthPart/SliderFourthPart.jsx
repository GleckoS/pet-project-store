import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'

const SliderFourthPart = (props) => {

    const newsTitle = "Last Day"
    const newsText = "FREE SHIPPING ON $50*"
    const newsButton = "USE CODE J56S3X"
    const informTitle = "DEAL OF THE DAY"
    const informText = "WHITE COLLECTION FROM $15.90"
    const informButton = "SHOP NOW"
    const sliderTitle = "BROWSE BY TYPE"

    const DivMainPageInnerWrapper = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding-top: 5px;
`
    const DivNewsWindow = styled.div`
    display: flex;
    justify-content: space-between;
`
    const DivNewsActionWrapper = styled.div`
    background: url("https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-aside-270x380.jpg");
    border-radius: 10px;
    width: 270px;
    height: 380px;
    position: relative;
`

    const DivNewsInformWrapper = styled.div`
    border-radius: 10px;
    height: 380px;
    position: relative;
`
    const DivNewsInformBottom = styled.div`
    background-color: #E8CABA;
    height: 81px;
    width: 870px;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: space-between;
`
    const PNewsInformText = styled.p`
    font-size: 18px;
    letter-spacing: .7px;
    font-weight: 700;
    margin-top: 3px;
    margin-bottom: 0;
    line-height: 20px;
`
    const H3NewsInformTitle = styled.h3`
    font-size: 13px;
    letter-spacing: -.4px;
    font-weight: 700;
    margin-top: 3px;
    margin-bottom: 0;
    line-height: 15px;
`
    const ImgNewsInform = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
    const ButtonInform = styled.button`
    margin: auto 30px;
    height: 30px;
    padding: 0 10px;
    border-radius: 4px;
    font-weight: 700;
    background-color: #222222;
    color: #fff;
    border: none;
`
    const DivInformTextWrapper = styled.div`
    padding: 19px 29px 23px 29px;
    letter-spacing: -.4px;
    color: #fff;
    line-height: 22px;
`
    const ANewsActionCall = styled.a`
    position: absolute;
    top: 20%;
    width: 270px;
    height: 380px;
    text-align: center;
`
    const PNewsActionText = styled.div`
    margin: 0 auto;
    width: 240px;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: .7px;
    padding: 10px 0;
`
    const H5NewsActionTitle = styled.div`
    font-size: 14px;
    font-weight: 700;
`
    const ButtonNewsActionLink = styled.button`
    border: none;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #E8CABA;
    padding: 20px 19px;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    & :hover{
        background-color: #DBAD94;
    }
`
    const DivCategorySlider = styled.div`
    padding: 30px 0;
`
    const DivCategoryTitle = styled.div`
    text-align: center;
    font-size: 12px;
    letter-spacing: .7px;
`
    const DivCategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    transition: .3s ease-in-out;
`
    const ACategoryItem = styled.a`
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
            <DivNewsWindow>
                <DivNewsActionWrapper>
                    <ANewsActionCall>
                        <H5NewsActionTitle>{newsTitle}</H5NewsActionTitle>
                        <PNewsActionText>{newsText}</PNewsActionText>
                        <ButtonNewsActionLink href="#">{newsButton}</ButtonNewsActionLink>
                    </ANewsActionCall>
                </DivNewsActionWrapper>
                <DivNewsInformWrapper>
                    <div className={"timer"}>
                    </div>
                    <ImgNewsInform
                        src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/deal-bg-870x299.jpg"/>
                    <DivNewsInformBottom>
                        <DivInformTextWrapper>
                            <H3NewsInformTitle>
                                {informTitle}
                            </H3NewsInformTitle>
                            <PNewsInformText>
                                {informText}
                            </PNewsInformText>
                        </DivInformTextWrapper>
                        <ButtonInform href="#">
                            {informButton}
                        </ButtonInform>
                    </DivNewsInformBottom>
                </DivNewsInformWrapper>
            </DivNewsWindow>
            <DivCategorySlider>
                <DivCategoryTitle>
                    <p>{sliderTitle}</p>
                </DivCategoryTitle>
                <DivCategoryWrapper>
                    {props.SliderFourthPartData.map(dialog =>
                            <ACategoryItem href={dialog.link}>
                                <h4>{dialog.text}</h4>
                            </ACategoryItem>
                    )}
                </DivCategoryWrapper>
            </DivCategorySlider>
        </DivMainPageInnerWrapper>
    )
}
export default SliderFourthPart