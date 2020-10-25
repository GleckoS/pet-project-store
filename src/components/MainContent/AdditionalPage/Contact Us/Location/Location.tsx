import React from "react";
import styled from "@emotion/styled";
import {Text} from "../../../../../common/selectors/StyledComponents";

const Location = () => {

    const LocationData =
        [
            {
                img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/logo-175x47.png",
                fBefore: "",
                sTitle: "Bralette",
                sText: "My Company Glasgow D04 89GR",
                sBefore: "",
            },
            {
                fTitle: "Telephone",
                fText: "(800) 123-4567",
                fBefore: "./phone.png",
                sTitle: "Fax",
                sText: "(800) 2345-6789",
                sBefore: "./fax.png"
            },
            {
                fTitle: "Opening Times",
                fText: "7 Days a week from 9:00 am to 7:00 pm",
                fBefore: "./key.png",
                sTitle: "Comments",
                sText: "We are glad to hear from you",
                sBefore: "./chat.png",
            },
        ]

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
`
    const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
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
    & p{
        padding: 5px 0;
    }
`

    return (
        <>
            <LocationTitle>
                <h2>OUR LOCATION</h2>
            </LocationTitle>
            <FlexContainer>
                {
                    LocationData.map(item =>
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
                                        <Text>{item.fText}</Text>
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
                                    <Text>{item.sText}</Text>
                                </TextBox>
                            </Box>
                        </div>
                    )
                }
            </FlexContainer>
        </>
    )
}

export default Location