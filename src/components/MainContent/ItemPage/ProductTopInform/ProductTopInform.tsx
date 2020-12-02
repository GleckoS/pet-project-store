import React, {useState} from "react";
import {MainTitle, Text} from "../../../../common/selectors/StyledComponents";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

const ProductTopInform = (props: any) => {

    const [isOpened, setOpened] = useState(false);

    let showMore = () => {
        if (!isOpened) {
            setOpened(true)
        } else {
            setOpened(false)
        }
    }


    const PageDirectionContainer = styled.div`
    text-align: left;
    & a{
        color: black;
    }
`
    const PageDirection = styled.p`
    font-size: 12px;
    color: #444;
`
    const PageHome = styled(NavLink)`
    &:hover{
        color: #DBAD94;
    }
`
    const FlexBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    @media(max-width: 764px){
        display: block;
    }
`
    const DescriptionContainer = styled.div`
    transition: all 1s;
`
    const ProductInformationContainer = styled.div`
    overflow: hidden;
    transition: all 1s;
    position: relative;
    text-align: left;
    padding-left: 15%;
    height: ${(props: { isOpened: boolean }) => props.isOpened ? "auto" : "200px"};
    width: 80%;
    &::after{
        content: '';
        box-shadow: 0 0 50px 35px #fff;
        position: absolute;
        display: ${(props: { isOpened: boolean }) => props.isOpened ? "none" : "block"};
        left: 0;
        right: 0;
        bottom: 0;
        height: 27px;
        background: #fff;
    }
    @media(max-width: 764px){
        padding: 0 15px;
        width: calc(100% - 30px);
    }
`
    const More = styled.button`
    float: left;
    padding-left: 15%;
    background-color: transparent;
    color: #E8CABA;
    border: none;
    cursor: pointer;
    font-weight: 800;
    font-size: 13px;
    &:hover{
        color: #000000;
    }
`
    const ProductIcon = styled.img`
    background-color: #f7f7f7;
`
    const IconContainer = styled.div`
    padding: 0 15px;
`


    return (
        <>
            <FlexBox>
                <IconContainer>
                    <ProductIcon src={props.productImg}/>
                </IconContainer>
                <DescriptionContainer>
                    <ProductInformationContainer isOpened={isOpened}>
                        <MainTitle>{props.productTitle}</MainTitle>
                        <Text>{props.productInformPartOne}</Text>
                        <Text>{props.productInformPartTwo}</Text>
                        <Text>{props.productInformPartThree}</Text>
                        <Text>{props.productInformPartFour}</Text>
                    </ProductInformationContainer>
                    <div>
                        <More onClick={showMore}>{isOpened ? "Hide" : "Show More"}</More>
                    </div>
                </DescriptionContainer>
            </FlexBox>
        </>
    )
}

export default ProductTopInform