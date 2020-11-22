import React from "react";
import {MainTitle, Text} from "../../../../../common/selectors/StyledComponents";
import styled from "@emotion/styled";

const PrivacyInform = (props: any) => {

    const InformationContainer = styled.div`
    text-align: left;
`
    const TitleNumber = styled.div`
    display: flex;
`
    const PrivacyMainTitle = styled(MainTitle)`
    font-weight: 400;
    color: #777777;
    &::before{
    content: ${(props: { id: string }) => "'" + props.id + "'"};
    border-radius: 50%;
    background-color: #E8CABA;
    color: #fff;
    display: inline-block;
    margin-right: 15px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    }
`

    return(
        <>
            {
                props.privacyData.map((item: any) =>
                    <InformationContainer>
                        <TitleNumber>
                            <PrivacyMainTitle id={item.id}>{item.title}</PrivacyMainTitle>
                        </TitleNumber>
                        <Text>{item.text}</Text>
                    </InformationContainer>
                )
            }
        </>
    )
}

export default PrivacyInform