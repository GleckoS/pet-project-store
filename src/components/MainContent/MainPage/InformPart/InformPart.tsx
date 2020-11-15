import React from "react";
import {Button, PageContainer} from "../../../../common/selectors/StyledComponents";
import styled from "@emotion/styled";

const InformPart = () => {

    const firstTitle = "Special Offer",
        firstText = "SAVE 50% ON ALL ITEMS",
        firstImg = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-1-370x247.jpg",
        secondTitle = "New Arrivals",
        secondText = "GET AN EXTRA 10% OFF YOUR FIRST ORDER",
        secondImg = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-2-370x247.jpg",
        thirdTitle = "SUMMER SALE",
        thirdText = "GET UP TO 60% OFF*",
        thirdPseudoText = `*Online only. Select styles. Price reflects discount`,
        buttonText = "SHOP NOW",
        placeHolder = "Your Email Address",
        formTitle = "SIGN UP TO OUR NEWSLETTER",
        formButton = 'SUBSCRIBE NOW'
    const FlexBox = styled.div`
    
    display: flex;
    justify-content: space-evenly;

`
    const FlexItem = styled.div`
    position: relative;
    width: 33.3%;
    margin: 0 15px;
    height: 247px;
    background-color: #E8CABA;
    border-radius: 6px;
`
    const FlexLink = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.6);
    transition: .3s linear;
    &:hover{
        background: rgba(245,231,224,.5);
            & h3{
                &::after{
                width: 20%;
                }
            }
        }
`
    const AltFlexLink = styled(FlexLink)`
    background: transparent;
    &:hover{
        background: rgba(0,0,0,.07);
    }
`
    const FlexImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-image: url(${(props: { img: string | null }) => props.img});
`
    const FlexContent = styled.div`
    pointer-events: none;
    position: absolute;
    bottom: 35%;
    width: 100%;
    text-align: center;
`
    const AltFlexContent = styled(FlexContent)`
    color: #fff;
`
    const FlexTitle = styled.p`
    font-size: 12px;
    line-height: 18px;
    font-weight: 300;
`
    const AltFlexTitle = styled(FlexTitle)`
    font-size: 14px;
    font-weight: 700;
`
    const FlexText = styled.h3`
    font-size: 24px;
    line-height: 1.21em;
    font-weight: 300;
    position: relative;
    padding: 0 10px 14px;
    margin: 0 0 20px;
    &::after{
        content: "";
        width: 10%;
        height: 2px;
        background-color: #000000;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`
    const AltFlexText = styled.h3`
    font-size: 22px;
    font-weight: 300;
    letter-spacing: .3px;
    margin: 0;
    padding: 0;
`
    const AltFlexPseudoText = styled.h3`
    padding: 0 15px;
`
    const FlexButton = styled(Button)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`
    const AltFlexButton = styled(FlexButton)`
    background-color: transparent;
    &::after{
        content: "";
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        position: absolute;
        bottom: 5px;
        left: 0;
        transition: .5s all ease;
    }
    &:hover{
        background-color: transparent;
        color: #000;
        &::after{
            background-color: #000;
            width: 0;
        }
          
    }
`
    const FormWrapper = styled.div`
    background-color: #f6f6f6;
    width: calc(100% - 56px);
    height: 100px;
    padding: 27px 16px 39px;
    margin: 40px 12px;
    border-radius: 6px;
    & p{
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 1.2px;
        color: #7f8187;
        margin-bottom: 26px;
    }
`
    const InputWrapper = styled.div`
    text-align: left;
    display: flex;
    justify-content: center;
        & input{
        width: 411px;
        display: inline-block;
        color: #7f8187;
        height: 35px;
        padding: 5.5px 10px 5.5px 33px;
        border: none;
        background-color: #fff;
            &:focus{
            box-shadow: 0 0 3px 3px rgba(0,0,0,.075);
            }
`
    const InputButton = styled(Button)`
    margin: 0 0 0 20px;
    height: 100%;
    padding: 15px;
`
    return (
        <PageContainer>
            <FlexBox>
                <FlexItem>
                    <FlexImg img={firstImg}/>
                    <FlexLink/>
                    <FlexContent>
                        <FlexTitle>{firstTitle}</FlexTitle>
                        <FlexText>{firstText}</FlexText>
                    </FlexContent>
                    <FlexButton to="/">{buttonText}</FlexButton>
                </FlexItem>
                <FlexItem>
                    <FlexImg img={secondImg}/>
                    <FlexLink/>
                    <FlexContent>
                        <FlexTitle>{secondTitle}</FlexTitle>
                        <FlexText>{secondText}</FlexText>
                    </FlexContent>
                    <FlexButton to="/">{buttonText}</FlexButton>
                </FlexItem>
                <FlexItem>
                    <AltFlexLink/>
                    <AltFlexContent>
                        <AltFlexTitle>{thirdTitle}</AltFlexTitle>
                        <AltFlexText>{thirdText}</AltFlexText>
                        <AltFlexPseudoText>{thirdPseudoText}</AltFlexPseudoText>
                    </AltFlexContent>
                    <AltFlexButton to="/">{buttonText}</AltFlexButton>
                </FlexItem>
            </FlexBox>
            <FormWrapper>
                <p>{formTitle}</p>
                <form>
                    <InputWrapper>
                        <input placeholder={placeHolder}/>
                        <InputButton to="/">{formButton}</InputButton>
                    </InputWrapper>
                </form>
            </FormWrapper>
        </PageContainer>
    )
}

export default InformPart