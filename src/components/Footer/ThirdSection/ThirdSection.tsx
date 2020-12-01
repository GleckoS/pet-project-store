import React from "react";

const ThirdFooterSection = (props: any) => {

    const {AltListWrapper, ListElement, ThirdSectionData} = props

    return(
        <AltListWrapper>
            <div>
                <h3>CONTACT US</h3>
            </div>
            <div>
                <ul>
                    {ThirdSectionData.map((item: {[key: string]: string}) =>
                        <ListElement>{item.name}</ListElement>
                    )}
                </ul>
            </div>
        </AltListWrapper>
    )
}

export default ThirdFooterSection