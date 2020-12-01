import React from "react";
import {NavLink} from "react-router-dom";
import {AiOutlineTwitter, BiRss, FaFacebookF, FaGooglePlusG, FaPinterest} from "react-icons/all";

const FourthFooterSection = (props: any) => {

    const {ListElement, Section, Social} = props

    return (
        <Section>
            <div>
                <div>
                    <h3>MORE WAYS TO SHOP</h3>
                </div>
                <div>
                    <ul>
                        <ListElement><NavLink to="#">Find a Store</NavLink></ListElement>
                        <ListElement><NavLink to="#">Find a Wish List</NavLink></ListElement>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h3>GET CONNECTED</h3>
                </div>
                <div>
                    <ul>
                        <ListElement><p>Like, share, or follow for exclusive info!</p></ListElement>
                        <li>
                            <Social>
                                <li><a href="https://plus.google.com/"><FaGooglePlusG/></a></li>
                                <li><a href="https://en.wikipedia.org/wiki/RSS"><BiRss/></a></li>
                                <li><a href="https://www.pinterest.com/"><FaPinterest/></a></li>
                                <li><a href="https://twitter.com/"><AiOutlineTwitter/></a></li>
                                <li><a href="https://www.facebook.com/"><FaFacebookF/></a></li>
                            </Social>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>

    )
}

export default FourthFooterSection