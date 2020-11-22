import React from "react";

const ThirdFooterSection = (props: any) => {
    return(
        <props.AltListWrapper>
            <div>
                <h3>CONTACT US</h3>
            </div>
            <div>
                <ul>
                    {props.ThirdSectionData.map((item: {[key: string]: string}) =>
                        <props.ListElement>{item.name}</props.ListElement>
                    )}
                </ul>
            </div>
        </props.AltListWrapper>
    )
}

export default ThirdFooterSection