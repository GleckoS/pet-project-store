import React from "react";
import styled from "@emotion/styled";
import {PageContainer} from "../../../common/selectors/StyledComponents";
import {NavLink} from "react-router-dom";

const Wrapper = styled.section`
    background: #E8CABA;
    height: 47px;
    margin-bottom: 24px;
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
`
const NavItem = styled.li`
    display: inline-block;
    line-height: 47px;
`
const Dropdown = styled.li`
    position: relative;
    display: inline-block;
    &:hover{
        div{
            display: block;
        }
    }
`
const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
`

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
                        link: "/bra-sets"
                    },
                    {
                        name: "Multiway bras",
                        link: "/bra-sets"
                    },
                    {
                        name: "Full cup bras",
                        link: "/bra-sets"
                    },
                    {
                        name: "Raw Cut",
                        link: "/bra-sets"
                    },
                    {
                        name: "Lingerie brands",
                        link: "/bra-sets"
                    },
                    {
                        name: "Minimiser bras",
                        link: "/bra-sets"
                    },
                ]
        },
        {
            list:
                [
                    {
                        name: "PANTIES",
                        link: "/bra-sets"
                    },
                    {
                        name: "Bikini",
                        link: "/bra-sets"
                    },
                    {
                        name: "Least-waist",
                        link: "/bra-sets"
                    },
                    {
                        name: "High-leg",
                        link: "/bra-sets"
                    },
                    {
                        name: "Cotton",
                        link: "/bra-sets"
                    },
                    {
                        name: "Lace-Up",
                        link: "/bra-sets"
                    },
                    {
                        name: "Dream",
                        link: "/bra-sets"
                    },
                ]
        },
        {
            list:
                [
                    {
                        name: "BRA SEPARATES",
                        link: "/bra-sets"
                    },
                    {
                        name: "Stockings",
                        link: "/bra-sets"
                    },
                    {
                        name: "Vinyl/Latex/Leather",
                        link: "/bra-sets"
                    },
                    {
                        name: "Sexy lingerie",
                        link: "/bra-sets"
                    },
                    {
                        name: "New in",
                        link: "/bra-sets"
                    }
                ]
        },
        {
            list:
                [
                    {
                        name: "BUSTIERS",
                        link: "/bra-sets"
                    },
                    {
                        name: "Corsets",
                        link: "/bra-sets"
                    },
                    {
                        name: "Perfect",
                        link: "/bra-sets"
                    },
                    {
                        name: "Waist cinchers",
                        link: "/bra-sets"
                    },
                    {
                        name: "Accessories",
                        link: "/bra-sets"
                    }
                ]
        }
    ]

const HeaderSearch = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <ul>
                        <Dropdown>
                            <NavLink to="/bras">BRAS</NavLink>
                            <DropdownContent>
                                {Data.map(item =>
                                    <ul>
                                        {item.list.map(element =>
                                            <li><NavLink to={element.link}>{element.name}</NavLink></li>
                                        )}
                                    </ul>
                                )}
                            </DropdownContent>
                        </Dropdown>
                        {mainNavData.map(item =>
                            <NavItem><NavLink to={item.link}>{item.name}</NavLink></NavItem>
                        )}
                    </ul>
                </div>
                <div>
                    <Counter>
                        0 item(s)
                    </Counter>
                </div>
            </Container>
        </Wrapper>
    )
}

export default HeaderSearch