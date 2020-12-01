import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import SliderElement from "../../../../common/components/SliderElement";
import {PageContainer} from "../../../../common/selectors/StyledComponents";

const Wrapper = styled(PageContainer)`
    padding-top: 5px;
    margin-top: 18px;
`
const ChangeContainer = styled.div`
    position: relative;
    border-bottom: 1px solid #F3D8C7;
    display: flex;
    justify-content: space-between;
`
const ChangeList = styled.ul`
    display: flex;
    right: 0;
    top: -10px;
    position: absolute;
        li{
        padding: 0 5px;
        font-size: 14px;
        background-color: white;
        height: 26px;
            button{
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 11px;
            padding: 4px;
            transition: .3s linear;
            }
            & :hover{
            color: #E8CABA;
            }
        }
        & .active{
        border: 1px solid #f3d8c7;
        border-bottom: none;
        height: 26.5px;
            button{
            color: #E8CABA;
            }
        }
`
const ChangeTitle = styled.p`
    font-size: 12px;
    margin-bottom: 5px;
`
const Next = styled.div`
    padding: 10px;
    transition: .3s linear;
    position: absolute;
    top: 35%;
    right: 10px;
    opacity: 0;
    &::before{
        color: #DBAD94;
    }
    @media(max-width: 988px){
        opacity: 1;
    }
`
const Prev = styled.div`
    padding: 10px;
    transition: .3s linear;
    position: absolute;
    top: 35%;
    left: 10px;
    opacity: 0;
    &::before{
        color: #DBAD94;
        border-radius: 0;
    }
    @media(max-width: 988px){
        opacity: 1;
    }
`
function SampleNextArrow(props: any) {
    return (
        <Next className={props.className} onClick={props.onClick}/>
    )
}

function SamplePrevArrow(props: any) {
    return (
        <Prev className={props.className} onClick={props.onClick}/>
    )
}

const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
        {
            breakpoint: 1196,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 764,
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

const SliderThirdPart = (props: any) => {
    let [current, setCurrent] = useState(1);

    const currentSlider = () => {
        if (current === 1) {
            return props.SliderData.map((item: {[key: string]: string}) => <SliderElement isLogged={props.isLogged} currentUser={props.currentUser} item={item}/>)
        }
        if (current === 2) {
            return props.SliderData.map((item: {[key: string]: string}) => item.bestsellers ?
                <SliderElement isLogged={props.isLogged} currentUser={props.currentUser} item={item}/> : null)
        }
        if (current === 3) {
            return props.SliderData.map((item: {[key: string]: string}) => item.featured ?
                <SliderElement isLogged={props.isLogged} currentUser={props.currentUser} item={item}/> : null)
        }
        if (current === 4) {
            return props.SliderData.map((item: {[key: string]: string}) => item.discount ?
                <SliderElement isLogged={props.isLogged} currentUser={props.currentUser} item={item}/> : null)
        }
    }

    return (
        <Wrapper>
            <ChangeContainer>
                <ChangeTitle>{props.SliderData.text}</ChangeTitle>
                <ChangeList>
                    <li className={`${current === 1 ? 'active' : ''}`}
                        onClick={() => setCurrent(current = 1)}>
                        <button>New Arrivals</button>
                    </li>
                    <li className={`${current === 2 ? 'active' : ''}`}
                        onClick={() => setCurrent(current = 2)}>
                        <button>Bestsellers</button>
                    </li>
                    <li className={`${current === 3 ? 'active' : ''}`}
                        onClick={() => setCurrent(current = 3)}>
                        <button>Featured</button>
                    </li>
                    <li className={`${current === 4 ? 'active' : ''}`}
                        onClick={() => setCurrent(current = 4)}>
                        <button>Specials</button>
                    </li>
                </ChangeList>
            </ChangeContainer>
            <Slider {...settings}>
                {
                    currentSlider()
                }
            </Slider>
        </Wrapper>
    )
}

export default SliderThirdPart