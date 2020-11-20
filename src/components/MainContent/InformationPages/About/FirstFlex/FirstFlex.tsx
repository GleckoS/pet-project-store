import React from "react";

const FirstFlex = (props: any) => {
    return(
        <props.FlexContainer>
            {props.inform.map((item: {[key:string] :string}) =>
                <props.FlexItem>
                    <props.H5>{item.Title}</props.H5>
                    <props.AboutText>{item.Text}</props.AboutText>
                </props.FlexItem>
            )}
        </props.FlexContainer>
    )
}

export default FirstFlex