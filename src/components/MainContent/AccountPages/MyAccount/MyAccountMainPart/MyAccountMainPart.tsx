import React from "react";
import {NavLink} from "react-router-dom";
import styled from "@emotion/styled";
import {Images} from "../../../../../common/textConst/images";

const MyAccountMainPart = () => {

    const account =
        [
            {
                title: "MY ACCOUNT",
                list:
                    [
                        {
                            title: "Edit your account information",
                            link: "/edit-acc-inform"
                        },
                        {
                            title: "Change your password",
                            link: "/change-password"
                        },
                        {
                            title: "Modify your address book entries",
                            link: "/"
                        },
                        {
                            title: "Wishlist",
                            link: "/wish-list"
                        }
                    ]
            },
            {
                title: "MY ORDERS",
                list:
                    [
                        {
                            title: "Order History",
                            link: "/"
                        },
                        {
                            title: "Downloads",
                            link: "/"
                        },
                        {
                            title: "Your Reward Points",
                            link: "/"
                        },
                        {
                            title: "Returns",
                            link: "/"
                        },
                        {
                            title: "Transactions",
                            link: "/"
                        },
                        {
                            title: "Payment Profile",
                            link: "/"
                        },
                    ]
            },
            {
                title: "NEWSLETTER",
                list:
                    [
                        {
                            title: "Newsletter",
                            link: "/news-letter"
                        }
                    ]
            },
        ]

    const AccountNavWrapper = styled.div`
    display: flex;
    justify-content: left;
    text-align: left;
    li{
      margin: 10px 0;
      &:hover{
        a{
          color: #E8CABA;
        }
      }
    }
    a{
      padding: 10px 0;
      color: #000000;
      margin: 0 0 0 20px;
      position: relative;
      &::before{
          content: url(${Images.rightArrow});
          color: #DBAD94;
          position: absolute;
          left: -20px;
          bottom: 50%;
          transform: translateY(50%);
          height: 18px;
          width: 18px;
      }
    }
`
    const Item = styled.div`
    padding: 0 60px 0 0;
`

    return (
        <AccountNavWrapper>
            {account.map(item =>
                <Item>
                    <h2>{item.title}</h2>
                    <ul>
                        {item.list.map( e =>
                            <li><NavLink to={e.link}>{e.title}</NavLink></li>
                        )}
                    </ul>
                </Item>
            )}
        </AccountNavWrapper>
    )
}

export default MyAccountMainPart