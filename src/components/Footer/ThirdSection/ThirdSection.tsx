import React, {useState} from "react";

const ThirdFooterSection = (props: any) => {

    const {AltListWrapper, ListElement, ThirdSectionData, Content, Title} = props

    const [isOpened, setOpened] = useState(false)

    const open = () => {
        setOpened(!isOpened)
    }

    return(
        <AltListWrapper>
            <Title onClick={() => {open()}}>
                <h3>CONTACT US</h3>
            </Title>
            <Content isOpened={isOpened}>
                <ul>
                    {ThirdSectionData.map((item: {[key: string]: string}) =>
                        item.link
                            ? <ListElement key={item.id}><a href={item.link}>{item.name}</a></ListElement>
                            : <ListElement key={item.id}>{item.name}</ListElement>
                    )}
                </ul>
            </Content>
        </AltListWrapper>
    )
}

export default ThirdFooterSection