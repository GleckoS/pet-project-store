import React from "react";
import styled from "@emotion/styled";
import {FaShoppingCart, FaTrash} from "react-icons/all";

const TableWrapper = styled.table`
    max-width: 100%;
    margin: 0 auto;
    border-spacing: 0;
    & tr{
        & th{
         border: 1px solid #ddd;
         font-size: 14px;
         font-weight: 400;
         opacity: .8;
         text-align: left;
         padding: 15px 10px;
         width: 292.5px;
        }
    }
    & :first-child{
        background-color: #eee;
    }
    
`
const ActionsWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: transparent!important;
`
const Action = styled.button`
    border: none;
    background-color: transparent!important;
    padding: 10px;
    margin: 0 auto;
    svg{
        font-size: 2em;
        background-color: transparent!important;
    }
    &:hover{
        svg{
            color: #E8CABA;
        } 
    }
`

const WishTable = (props: any) => {

    const Delete = () => {

    }
    const ToCart = () => {

    }
    return (
        <TableWrapper>
            {props.currentUser.wish[0]
                ? <>
                    <tr>
                        <th>
                            IMAGE
                        </th>
                        <th>
                            PRODUCT NAME
                        </th>
                        <th>
                            MODEL
                        </th>
                        <th>
                            STOCK
                        </th>
                        <th>
                            UNIT PRICE
                        </th>
                        <th>
                            ACTION
                        </th>
                    </tr>
                    {props.currentUser.wish.map((item: any) =>
                        <tr>
                            <th>
                                <img src={item.img}/>
                            </th>
                            <th>
                                {item.text}
                            </th>
                            <th>
                                {item.model}
                            </th>
                            <th>
                                {item.stock}
                            </th>
                            <th>
                                {item.price}
                            </th>
                            <th>
                                <ActionsWrapper>
                                    <Action onClick={() => {Delete()}}><FaTrash/></Action>
                                    <Action onClick={() => {ToCart()}}><FaShoppingCart/></Action>
                                </ActionsWrapper>
                            </th>
                        </tr>
                    )}
                </>
                : "Your shopping cart is empty!"
            }


        </TableWrapper>
    )
}

export default WishTable