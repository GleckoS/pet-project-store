import React, {useState} from "react";
import SliderElement from "../../../../common/components/SliderElement";
import styled from "@emotion/styled";
import {ImMenu, ImTable2} from "react-icons/all";

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

const Wrapper = styled.div`
    display: flex;
`
const LeftPartContainer = styled.aside`
    width: calc(25% - 30px);
    padding: 0 15px;
   
`
const RightPartContainer = styled.div`
    width: calc(75% - 30px);
    padding: 0 15px;
    height: 100%;
`
const MapWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
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
        background-color: #e6e6e6;
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
        background-color: #e6e6e6;
        position: absolute;
        top: 0;
    }
    &::before{
        content: "";
        width: 100%;
        height: 1px;
        background-color: #e6e6e6;
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
    transition: .1s linear!important;
    svg{
        transition: .1s linear!important;
    }
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
`

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const ProductMainContent = (props:any) => {

    let [show, setShow] = useState("6")

    const changeShow = (value: string) => {
        setShow(value)
    }

    let Slider = props.items.filter((e: any) => e.id < show)

    let a = getRandomInt(props.items.length)
    let BestSeller = props.items.filter((e: any) => e.id === a)

    return (
        <Wrapper>
            <LeftPartContainer>
                <div>
                    <H4>BESTSELLERS</H4>
                </div>
                <div>
                    <SliderElement item={BestSeller[0]}/>
                </div>
            </LeftPartContainer>
            <RightPartContainer>
                <Settings>
                    <Sort>
                        <ViewChange>
                            <ImMenu/>
                        </ViewChange>
                        <ViewChange>
                            <ImTable2/>
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
        </Wrapper>
    )
}

export default ProductMainContent