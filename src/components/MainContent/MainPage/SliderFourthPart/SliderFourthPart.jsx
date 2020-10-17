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
    background-image: url("https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-aside-270x380.jpg");
    opacity: 0.5;
    width: 270px;
    height: 380px;
    border-radius: 10px;
`
    const ANewsActionCall = styled.a`
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
    display: flex;justify-content: space-between;
`
    const PNewsInformText = styled.p`
    color: #fff;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: .7px;
    font-weight: 700;
    margin-top: 3px;
    margin-bottom: 0;
`
    const H3NewsInformTitle = styled.h3`
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: .7px;
    font-weight: 700;
    margin-top: 3px;
    margin-bottom: 0;
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
    padding: 10px;
`
    return (
        <DivMainPageInnerWrapper>
            <DivNewsWindow>
                <DivNewsActionWrapper>
                    <ANewsActionCall>
                        <p>{newsTitle}</p>
                        <h5>{newsText}</h5>
                        <button>{newsButton}</button>
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
                        <ButtonInform>
                            {informButton}
                        </ButtonInform>
                    </DivNewsInformBottom>
                </DivNewsInformWrapper>
            </DivNewsWindow>
            <div>
                <div>

                </div>
                <div>
                    {props.SliderFourthPartData.map(dialog =>
                        <div>
                            <a href={dialog.link}>
                                <h4>{dialog.text}</h4>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </DivMainPageInnerWrapper>
    )
}
export default SliderFourthPart