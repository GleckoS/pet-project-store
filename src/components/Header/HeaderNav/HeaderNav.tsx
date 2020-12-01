import React from "react";
import styled from "@emotion/styled";
import {PageContainer} from "../../../common/selectors/StyledComponents";
import {NavLink} from "react-router-dom";

const mainNavData =
    [
        {
            name: "PANTIES",
            link: "/panties"
        },
        {
            name: "CORSETS",
            link: "/corsets"
        },
        {
            name: "SEXY",
            link: "/sexy"
        },
        {
            name: "SLEEP",
            link: "/sleep"
        },
        {
            name: "SWIM",
            link: "/swim"
        },
        {
            name: "STOCKINGS",
            link: "/stockings"
        },
        {
            name: "ACCESSORIES",
            link: "/accessories"
        },
    ]
const Data =
    [
        {
            list:
                [
                    {
                        name: "BRA SETS",
                        link: "/bra-sets"
                    },
                    {
                        name: "Balconette bras",
                        link: "balconette-bras"
                    },
                    {
                        name: "Multiway bras",
                        link: "/multiway-bras"
                    },
                    {
                        name: "Full cup bras",
                        link: "/full-cup-bras"
                    },
                    {
                        name: "Lingerie brands",
                        link: "/lingerie-brands"
                    },
                    {
                        name: "Minimiser bras",
                        link: "/minimiser-bras"
                    },
                ]
        },
        {
            list:
                [
                    {
                        name: "PANTIES",
                        link: "/panties"
                    },
                    {
                        name: "Bikini",
                        link: "/bikini"
                    },
                    {
                        name: "High-leg",
                        link: "/high-leg"
                    },
                    {
                        name: "Cotton",
                        link: "/cotton"
                    },
                    {
                        name: "Lace-Up",
                        link: "/lace-up"
                    },
                    {
                        name: "Dream",
                        link: "/dream"
                    },
                ]
        },
        {
            list:
                [
                    {
                        name: "BRA SEPARATES",
                        link: "/bra-separates"
                    },
                    {
                        name: "Stockings",
                        link: "stockings"
                    },
                    {
                        name: "Vinyl/Latex/Leather",
                        link: "/vinyl-latex-leather"
                    },
                    {
                        name: "Sexy lingerie",
                        link: "/sexy-lingerie"
                    },
                    {
                        name: "New in",
                        link: "/new-in"
                    }
                ]
        },
        {
            list:
                [
                    {
                        name: "BUSTIERS",
                        link: "/bustiers"
                    },
                    {
                        name: "Corsets",
                        link: "/corsets"
                    },
                    {
                        name: "Perfect",
                        link: "/perfect"
                    },
                    {
                        name: "Accessories",
                        link: "/accessories"
                    }
                ]
        }
    ]

const Wrapper = styled.section`
    background: #E8CABA;
    height: 47px;
    margin-bottom: 24px;
    @media(max-width: 764px){
        display: none;
    }
`
const Container = styled(PageContainer)`
    display: flex;
    justify-content: space-between;
    height: 47px;
`
const Counter = styled.button`
    border: none;
    background-color: transparent;
    height: 100%;
    cursor: pointer;
    color: #ffffff;
    font-weight: 600;
    &:hover{
        color: #000000;
    }
`
const NavItem = styled.li`
    display: inline-block;
    line-height: 47px;
`
const Link = styled(NavLink)`
    color: #ffffff;
    font-weight: 600;
    padding: 20px;
    &:hover{
        color: #000000;
    }
    @media (max-width: 1196px) {
        padding: 10px;
    } 
`
const DropItem = styled.li`
    padding: 0 0 10px;
`
const DropLink = styled(NavLink)`
    color: #000;
    font-weight: 400; 
    padding: 5px;
    &:hover{
        color: #E8CABA;
    } 
`
const Dropdown = styled.li`
    position: relative;
    display: inline-block;
    &:hover{
        div{
            height: auto;
            display: flex;
            justify-content: space-between;
        }
    }
`
const DropdownContent = styled.div`
    display: none;
    transition: 1s ease;
    position: absolute;
    top: 36px;
    left: 0;
    text-align: left;
    background-color: #f9f9f9;
    width: 764px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    height: 0;
`

const HeaderNav = (props: any) => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <ul>
                        <Dropdown>
                            <Link to="/bras">BRAS</Link>
                            <DropdownContent>
                                {Data.map(item =>
                                    <ul>
                                        {item.list.map(element =>
                                            <DropItem><DropLink to={element.link}>{element.name}</DropLink></DropItem>
                                        )}
                                    </ul>
                                )}
                            </DropdownContent>
                        </Dropdown>
                        {mainNavData.map(item =>
                            <NavItem><Link to={item.link}>{item.name}</Link></NavItem>
                        )}
                    </ul>
                </div>
                <div>
                    {props.currentUser
                        ? <Counter>{props.currentUser.cart.length + " item(s)"}</Counter>
                        : <Counter>{"0 item(s)"}</Counter>
                    }
                </div>
            </Container>
        </Wrapper>
    )
}

export default HeaderNav

