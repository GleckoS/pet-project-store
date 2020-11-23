import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import {Button, PageContainer} from "../../../../common/selectors/StyledComponents";

const buttonText = "SHOP NOW"

const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
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
const Item = styled.div`
    height: 380px;
    max-width: 100%;
`
const Img = styled.img`
    align-self: center;
    margin: 0 auto;
`
const Text = styled.h3`
    font-size: 16px;
    color: #000000;
    letter-spacing: .7px;
    position: relative;
    margin-bottom: 40px;
    transition: .3s linear;
      &::after{
        position: absolute;
      content: "";
      max-width: 40px;
      height: 2px;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: -10px;
      background-color: #E8CABA;
      transition: .3s linear;
      }
`
const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    margin: 10px;
    padding-top: 10px;
    transition: .3s linear;
    &:hover{
        & h3{
             color: #E8CABA;
             &::after{
                max-width: 60px;
                height: 2px;
                transition: .3s linear;
             }
        }
    }
    
`

const SliderSecondPart = (props: any) => {
    return (
        <Wrapper>
            <Slider {...settings}>
                {props.SliderSecondPartData.map((dialog: { [key: string]: string }) =>
                    <Item>
                        <Link href="#">
                            <Img src={dialog.img}/>
                            <Text>{dialog.text}</Text>
                            <Button to="/">{buttonText}</Button>
                        </Link>
                    </Item>
                )}
            </Slider>
        </Wrapper>
    )
}

export default SliderSecondPart