import React from "react";
import styled from "@emotion/styled";

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

const WishTable = (props: any) => {
    debugger
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
                                {item.img}
                            </th>
                            <th>
                                {item.name}
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
                                <button>delete</button>
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