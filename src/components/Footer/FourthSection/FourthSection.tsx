import React from "react";
import {NavLink} from "react-router-dom";

const FourthFooterSection = (props: any) => {
    return (
        <props.Section>
            <div>
                <div>
                    <h3>MORE WAYS TO SHOP</h3>
                </div>
                <div>
                    <ul>
                        <props.ListElement><NavLink to="#">Find a Store</NavLink></props.ListElement>
                        <props.ListElement><NavLink to="#">Find a Wish List</NavLink></props.ListElement>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h3>GET CONNECTED</h3>
                </div>
                <div>
                    <ul>
                        <props.ListElement><p>Like, share, or follow for exclusive info!</p></props.ListElement>
                        <li>
                            <ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </props.Section>

    )
}

export default FourthFooterSection