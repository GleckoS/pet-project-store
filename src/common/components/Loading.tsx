import React from "react";
import styled from "@emotion/styled";
import {keyframes} from "emotion";

const spin = keyframes`
    from, 0%, to { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`
const Wrapper = styled.div`
`
const Loader = styled.div`
    border: 16px solid #E8CABA;
    border-top: 16px solid #dbad94;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
    animation: ${spin} 2s linear infinite;
    `

const Loading = () => {

    return (
        <Wrapper>
            <Loader>
            </Loader>
        </Wrapper>
    )
}

export default Loading