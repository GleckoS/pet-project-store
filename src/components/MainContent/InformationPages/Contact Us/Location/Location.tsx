import React from "react";
import styled from "@emotion/styled";
import {Text} from "../../../../../common/selectors/StyledComponents";

const Location = (props: any) => {

    const Box = styled.div`
    position: relative;
    display: flex;
    padding: 10px 0;
    height: 55px;
    & p{
        margin: 0;
    }
    & h5{
        margin: 0;
    }
    @media (max-width: 1196px) {
        max-width: 280px;
    }
    @media (max-width: 988px) {
        max-width: 210px;
    }
    @media (max-width: 764px) {
        width: 100%;
        padding: 15px 15px;
    }
`
    const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    @media (max-width: 764px) {
        display: block;
    }
`
    const Icon = styled.img`
    width: 30px;
    height: 30px;
    padding: 10px;
    margin-right: 20px;
    border: 2px solid #E8CABA;
    border-radius: 50%;
`
    const LocationTitle = styled.div`
    text-align: left;
    position: relative;
    margin: 30px 0 40px;
    font-size: 12px;
    font-weight: 400;
    &::after{
        content: "";
        width: 1170px;
        height: 1px;
        background-color: #dddddd;
        position: absolute;
        bottom: -15px;
        left: 0;
    }
`
    const TextBox = styled.div`
    margin: auto 0;
`
    const ContactText = styled(Text)`
    padding: 0;
    font-weight: 400;
    @media (max-width: 988px) {
        letter-spacing: 0;
        font-size: 12px;
        font-weight: 600;
`

    return (
        <React.Fragment>
            <LocationTitle>
                <h2>OUR LOCATION</h2>
            </LocationTitle>
            <FlexContainer>
                {
                    props.LocationData.map((item: any) =>
                        <div>
                            {item.img
                                ? <Box>
                                    <img src={item.img}/>
                                </Box>
                                : <Box>
                                    <div>
                                        <Icon src={item.fBefore}/>
                                    </div>
                                    <TextBox>
                                        <h5>{item.fTitle}</h5>
                                        <ContactText>{item.fText}</ContactText>
                                    </TextBox>
                                </Box>
                            }
                            <Box>
                                <div>
                                    {item.sBefore
                                        ? <Icon src={item.sBefore}/>
                                        : null
                                    }
                                </div>
                                <TextBox>
                                    <h5>{item.sTitle}</h5>
                                    <ContactText>{item.sText}</ContactText>
                                </TextBox>
                            </Box>
                        </div>
                    )
                }
            </FlexContainer>
        </React.Fragment>
    )
}

export default Location