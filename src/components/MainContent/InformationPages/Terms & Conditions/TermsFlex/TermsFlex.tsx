import React from "react";
import {MainTitle, Text} from "../../../../../common/selectors/StyledComponents";
import styled from "@emotion/styled";

const TermsFlex = (props: any) => {

    const TermsContainer = styled.div`
    margin-top: -50px;
    display: flex;
    text-align: left;
    & div{
      max-width: 600px;
      padding: 10px;
    }
`
    const TermsTitle = styled(MainTitle)`
    font-weight: 400;
    color: #4c4c4c;
    position: relative;
    padding-left: 60px;
    margin: 30px 0 30px;
    &::before{
      content: "";
      background-image: url("./img/ok.png");
      position: absolute;
      top: -5px;
      left: 0;
      width: 40px;
      height: 40px;
      background-size: cover;
    }
`

    return(
        <TermsContainer>
            <div>
                {
                    props.LeftColumnData.map((item: {[key:string] :string}) =>
                        <>
                            <TermsTitle>{item.Title}</TermsTitle>
                            <Text>{item.Text}</Text>
                        </>
                    )
                }
            </div>
            <div>
                {
                    props.RightColumnData.map((item: {[key:string] :string}) =>
                        <>
                            <TermsTitle>{item.Title}</TermsTitle>
                            <Text>{item.Text}</Text>
                        </>
                    )
                }
            </div>
        </TermsContainer>
    )
}

export default TermsFlex