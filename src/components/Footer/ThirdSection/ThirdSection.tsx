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
                        item.link
                            ? <ListElement><a href={item.link}>{item.name}</a></ListElement>
                            : <ListElement>{item.name}</ListElement>
                    )}
                </ul>
            </div>
        </AltListWrapper>
    )
}

export default ThirdFooterSection