import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import SliderElement from "../../../../common/components/SliderElement";

const SliderThirdPart = (props: any) => {
    const settings = {
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false
    };
    debugger
    const MainPageInnerWrapper = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding-top: 5px;
    
`
    const ChangeSliderContainer = styled.div`
    position: relative;
    border-bottom: 1px solid #F3D8C7;
    display: flex;
    justify-content: space-between;
`
    const ChangeSliderList = styled.ul`
    display: flex;
    right: 0;
    top: 5px;
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
    const ChangeSliderTitle = styled.p`
    font-size: 12px;
    margin-bottom: 5px;
`
    let [current, setCurrent] = useState(1);

    interface dialogData {
        [key: string]: string
    }

    const currentSlider = () => {
        if (current === 1) {
            return props.SliderThirdPartData.SliderData.map((dialog: dialogData) => <SliderElement {...dialog}/>)
        } else if (current === 2) {
            return props.SliderThirdPartData.SliderData.map((dialog: dialogData) => dialog.bestsellers ?
                <SliderElement {...dialog}/> : null)
        } else if (current === 3) {
            return props.SliderThirdPartData.SliderData.map((dialog: dialogData) => dialog.featured ?
                <SliderElement {...dialog}/> : null)
        } else if (current === 4) {
            return props.SliderThirdPartData.SliderData.map((dialog: dialogData) => dialog.discount ?
                <SliderElement {...dialog}/> : null)
        }
    }

    return (
        <MainPageInnerWrapper>
            <ChangeSliderContainer>
                <ChangeSliderTitle>{props.SliderThirdPartData.text}</ChangeSliderTitle>
                <ChangeSliderList>
                    <li className={`${current === 1 ? 'active' : ''}`}
                        onClick={() => setCurrent(current = 1)}>
                        <button>New Arrivals
                        </button>
                    </li>
                    <li className={`${current === 2 ? 'active' : ''}`}
                        onClick={() => setCurrent(current = 2)}>
                        <button>Bestsellers
                        </button>
                    </li>
                    <li className={`${current === 3 ? 'active' : ''}`}
                        onClick={() => setCurrent(current = 3)}>
                        <button>Featured
                        </button>
                    </li>
                    <li className={`${current === 4 ? 'active' : ''}`}
                        onClick={() => setCurrent(current = 4)}>
                        <button>Specials
                        </button>
                    </li>
                </ChangeSliderList>
            </ChangeSliderContainer>
            <Slider {...settings}>
                {
                    currentSlider()
                }
            </Slider>
        </MainPageInnerWrapper>
    )
}

export default SliderThirdPart