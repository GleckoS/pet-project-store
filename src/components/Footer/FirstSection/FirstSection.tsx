import React, {useState} from "react";

const FirstFooterSection = (props: any) => {

    const {ListWrapper, ListElement, ListLink, FirstSectionData, Content, Title} = props

    const [isOpened, setOpened] = useState(false)

    const open = () => {
        setOpened(!isOpened)
    }

    return(
        <ListWrapper>
            <Title onClick={() => {open()}}>
                <h3>INFORMATION</h3>
            </Title>
            <Content isOpened={isOpened}>
                <ul>
                    {FirstSectionData.map((item: {[key: string]: string}) =>
                        <ListElement key={item.id} ><ListLink to={item.path}>{item.name}</ListLink></ListElement>
                    )}
                </ul>
            </Content>
        </ListWrapper>
    )
}

export default FirstFooterSection