import React from "react";
import {MainTitle, Text} from "../../../../../common/selectors/StyledComponents";

const DeliveryBottomInform = (props: any) => {
    return (
        <>
            <MainTitle>{props.informTitle}</MainTitle>
            <Text>{props.informText}</Text>
        </>
    )
}
export default DeliveryBottomInform