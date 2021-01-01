import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {AiOutlineTwitter, BiRss, FaFacebookF, FaGooglePlusG, FaPinterest} from "react-icons/all";

const FourthFooterSection = (props: any) => {

    const {ListElement, Section, Social, Title, Content} = props

    const [isOpened_1, setOpened_1] = useState(false)

    const open_1 = () => {
        setOpened_1(!isOpened_1)
    }

    const [isOpened_2, setOpened_2] = useState(false)

    const open_2 = () => {
        setOpened_2(!isOpened_2)
    }

    return (
        <Section>
            <div>
                <Title onClick={() => {open_1()}}>
                    <h3>MORE WAYS TO SHOP</h3>
                </Title>
                <Content isOpened={isOpened_1}>
                    <ul>
                        <ListElement key="1"><NavLink to="#">Find a Store</NavLink></ListElement>
                        <ListElement key="2"><NavLink to="#">Find a Wish List</NavLink></ListElement>
                    </ul>
                </Content>
            </div>
            <div>
                <Title onClick={() => {open_2()}}>
                    <h3>GET CONNECTED</h3>
                </Title>
                <Content isOpened={isOpened_2}>
                    <ul>
                        <ListElement><p>Like, share, or follow for exclusive info!</p></ListElement>
                        <li>
                            <Social>
                                <li key="1"><a href="https://plus.google.com/"><FaGooglePlusG/></a></li>
                                <li key="2"><a href="https://en.wikipedia.org/wiki/RSS"><BiRss/></a></li>
                                <li key="3"><a href="https://www.pinterest.com/"><FaPinterest/></a></li>
                                <li key="4"><a href="https://twitter.com/"><AiOutlineTwitter/></a></li>
                                <li key="5"><a href="https://www.facebook.com/"><FaFacebookF/></a></li>
                            </Social>
                        </li>
                    </ul>
                </Content>
            </div>
        </Section>

    )
}

export default FourthFooterSection