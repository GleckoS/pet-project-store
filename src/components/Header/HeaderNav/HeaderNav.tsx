import React from "react";
import styled from "@emotion/styled";
import {PageContainer} from "../../../common/selectors/StyledComponents";
import {NavLink} from "react-router-dom";

const mainNavData =
    [
        {
            name: "PANTIES",
            link: "/panties",
            id: '1'
        },
        {
            name: "CORSETS",
            link: "/corsets",
            id: '2'
        },
        {
            name: "SEXY",
            link: "/sexy",
            id: '3'
        },
        {
            name: "SLEEP",
            link: "/sleep",
            id: '4'
        },
        {
            name: "SWIM",
            link: "/swim",
            id: '5'
        },
        {
            name: "STOCKINGS",
            link: "/stockings",
            id: '6'
        },
        {
            name: "ACCESSORIES",
            link: "/accessories",
            id: '7'
        },
    ]
const Data =
    [
        {
            list:
                [
                    {
                        name: "BRA SETS",
                        link: "/bra-sets",
                        id: '8'
                    },
                    {
                        name: "Balconette bras",
                        link: "balconette-bras",
                        id: '9'
                    },
                    {
                        name: "Multiway bras",
                        link: "/multiway-bras",
                        id: '10'
                    },
                    {
                        name: "Full cup bras",
                        link: "/full-cup-bras",
                        id: '11'
                    },
                    {
                        name: "Lingerie brands",
                        link: "/lingerie-brands",
                        id: '12'
                    },
                    {
                        name: "Minimiser bras",
                        link: "/minimiser-bras",
                        id: '13'
                    },
                ]
        },
        {
            list:
                [
                    {
                        name: "PANTIES",
                        link: "/panties",
                        id: '14'
                    },
                    {
                        name: "Bikini",
                        link: "/bikini",
                        id: '15'
                    },
                    {
                        name: "High-leg",
                        link: "/high-leg",
                        id: '16'
                    },
                    {
                        name: "Cotton",
                        link: "/cotton",
                        id: '17'
                    },
                    {
                        name: "Lace-Up",
                        link: "/lace-up",
                        id: '18'
                    },
                    {
                        name: "Dream",
                        link: "/dream",
                        id: '19'
                    },
                ]
        },
        {
            list:
                [
                    {
                        name: "BRA SEPARATES",
                        link: "/bra-separates",
                        id: '20'
                    },
                    {
                        name: "Stockings",
                        link: "stockings",
                        id: '21'
                    },
                    {
                        name: "Vinyl/Latex/Leather",
                        link: "/vinyl-latex-leather",
                        id: '22'
                    },
                    {
                        name: "Sexy lingerie",
                        link: "/sexy-lingerie",
                        id: '23'
                    },
                    {
                        name: "New in",
                        link: "/new-in",
                        id: '24'
                    }
                ]
        },
        {
            list:
                [
                    {
                        name: "BUSTIERS",
                        link: "/bustiers",
                        id: '25'
                    },
                    {
                        name: "Corsets",
                        link: "/corsets",
                        id: '26'
                    },
                    {
                        name: "Perfect",
                        link: "/perfect",
                        id: '27'
                    },
                    {
                        name: "Accessories",
                        link: "/accessories",
                        id: '28'
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
                        <Dropdown key="0">
                            <Link to="/bras">BRAS</Link>
                            <DropdownContent>
                                {Data.map(item =>
                                    <ul>
                                        {item.list.map(item =>
                                            <DropItem key={item.id}><DropLink to={item.link}>{item.name}</DropLink></DropItem>
                                        )}
                                    </ul>
                                )}
                            </DropdownContent>
                        </Dropdown>
                        {mainNavData.map(item =>
                            <NavItem key={item.id}><Link to={item.link}>{item.name}</Link></NavItem>
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

