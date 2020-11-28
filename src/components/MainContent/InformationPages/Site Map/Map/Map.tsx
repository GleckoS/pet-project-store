import React from "react";
import styled from "@emotion/styled";

const Map = () => {

    const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: left;
    color: #515151;
    padding: 0 15px;
    & div{
        width: 50%;
        & ul{
            & legend{
                font-weight: 300;
                font-size: 18px;
                padding: 15px 0;
            }
            & li{
            position: relative;
            padding: 5px 30px;
                &::after{
                    content: "";
                    position: absolute;
                    left: 10px;
                    top: 8px;
                    width: 10px;
                    height: 10px;
                    background-color: #E8CABA;
                    border-radius: 50%;
                }
            }
            & ul{
                padding-left: 50px;
            }
        }
    }
    @media(max-width: 764px){
        display: block;
    }
`

    return(
        <FlexWrapper>
            <div>
                <ul>
                    <legend>CATEGORIES</legend>
                    <li><a>Push-Up</a></li>
                    <li><a>Panties</a></li>
                    <li><a>Hosiery</a></li>
                    <li><a>Bridal</a></li>
                    <li><a>Sleep</a></li>
                    <li><a>Swim</a></li>
                    <li><a>Stockings</a></li>
                    <li><a>Accessories</a></li>
                    <li><a>Corsets</a></li>
                    <li><a>Sexy</a></li>
                    <li><a>Bras</a></li>
                    <ul>
                        <legend>Bra Sets</legend>
                        <li><a>Balconette bras</a></li>
                        <li><a>Multiway bras</a></li>
                        <li><a>Full cup bras</a></li>
                        <li><a>Raw Cut</a></li>
                        <li><a>Lingerie brands</a></li>
                        <li><a>Minimiser bras</a></li>
                    </ul>
                    <ul>
                        <legend>Panties</legend>
                        <li><a>Bikini</a></li>
                        <li><a>Laist-waist</a></li>
                        <li><a>High-leg</a></li>
                        <li><a>Cotton</a></li>
                        <li><a>Lace-Up</a></li>
                        <li><a>Dream</a></li>
                    </ul>
                    <ul>
                        <legend>Bra Sets</legend>
                        <li><a>Stockings</a></li>
                        <li><a>Vinyl/Latex/Leather</a></li>
                        <li><a>Sexy lingerie</a></li>
                        <li><a>New in</a></li>
                    </ul>
                    <ul>
                        <legend>Bustiers</legend>
                        <li><a>Corsets</a></li>
                        <li><a>Perfect</a></li>
                        <li><a>Waist cinchers</a></li>
                        <li><a>Accessories</a></li>
                    </ul>
                </ul>
            </div>
            <FlexWrapper>
                <div>
                    <ul>
                        <legend>INFORMATION</legend>
                        <li><a>About</a></li>
                        <li><a>Delivery Information</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Terms & Conditions</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <legend>PAGES</legend>
                        <li><a>Push-Up</a></li>
                        <li><a>Panties</a></li>
                        <li><a>Hosiery</a></li>
                        <li><a>Bridal</a></li>
                        <li><a>Sleep</a></li>
                        <li><a>Swim</a></li>
                        <li><a>Stockings</a></li>
                        <li><a>Accessories</a></li>
                        <li><a>Bras</a></li>
                        <li><a>Corsets</a></li>
                        <li><a>Sexy</a></li>
                    </ul>
                </div>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default Map
