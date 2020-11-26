import React from "react";
import {Button, ErrorMessage, PageContainer, SubmitButton} from "../../../../common/selectors/StyledComponents";
import styled from "@emotion/styled";

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

const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Item = styled.div`
    position: relative;
    width: 33.3%;
    margin: 0 15px;
    height: 247px;
    background-color: #E8CABA;
    border-radius: 6px;
`
const Link = styled.a`
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
const AltLink = styled(Link)`
    background: transparent;
    &:hover{
        background: rgba(0,0,0,.07);
    }
`
const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-image: url(${(props: { img: string | null }) => props.img});
`
const Content = styled.div`
    pointer-events: none;
    position: absolute;
    bottom: 35%;
    width: 100%;
    text-align: center;
`
const AltContent = styled(Content)`
    color: #fff;
`
const Title = styled.p`
    font-size: 12px;
    line-height: 18px;
    font-weight: 300;
`
const AltTitle = styled(Title)`
    font-size: 14px;
    font-weight: 700;
`
const Text = styled.h3`
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
const AltText = styled.h3`
    font-size: 22px;
    font-weight: 300;
    letter-spacing: .3px;
    margin: 0;
    padding: 0;
`
const AltPseudoText = styled.h3`
    padding: 0 15px;
`
const FButton = styled(Button)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`
const AltButton = styled(FButton)`
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
const InputButton = styled(SubmitButton)`
    margin: 0 0 0 20px;
    height: 100%;
    width: 160px;
    padding: 15px;
`

const InformPart = (props: any) => {
    return (
        <PageContainer>
            <Flex>
                <Item>
                    <Img img={firstImg}/>
                    <Link/>
                    <Content>
                        <Title>{firstTitle}</Title>
                        <Text>{firstText}</Text>
                    </Content>
                    <Button to="/">{buttonText}</Button>
                </Item>
                <Item>
                    <Img img={secondImg}/>
                    <Link/>
                    <Content>
                        <Title>{secondTitle}</Title>
                        <Text>{secondText}</Text>
                    </Content>
                    <Button to="/">{buttonText}</Button>
                </Item>
                <Item>
                    <AltLink/>
                    <AltContent>
                        <AltTitle>{thirdTitle}</AltTitle>
                        <AltText>{thirdText}</AltText>
                        <AltPseudoText>{thirdPseudoText}</AltPseudoText>
                    </AltContent>
                    <AltButton to="/">{buttonText}</AltButton>
                </Item>
            </Flex>
            <FormWrapper>
                <p>{formTitle}</p>
                <form onSubmit={props.handleSubmit(props.onSubmit)}>
                    <InputWrapper>
                        <input name="email" placeholder={placeHolder} ref={props.register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                        <InputButton type="submit">{formButton}</InputButton>
                    </InputWrapper>
                    {props.errors.email && <ErrorMessage>Please input correct Email!</ErrorMessage>}
                </form>
            </FormWrapper>
        </PageContainer>
    )
}

export default InformPart