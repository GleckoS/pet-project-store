import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Parser from "html-react-parser";

const Table = () => {

    const TableWrapper = styled.table`
    width: 1170px;
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
        }
    }
    & :first-child{
        background-color: #eee;
    }
    
`
    const tableData =
        [
            {
                first: "SERVICE",
                second: "LOCATIONS",
                third: "DELIVERY SCHEDULE",
                fourth: "COST PER SHIPMENT"
            },
            {
                first: "Royal mail 1st Class Service (Order value $20 or less)",
                second: "All of UK & some European Countries",
                third: "1-3 days\n" +
                    "Monday - Saturday",
                fourth: "$3.95"
            },
            {
                first: "Royal mail Tracker (Order value $50 or less)",
                second: "All of UK",
                third: "1-3 days\n" +
                    "Monday - Saturday",
                fourth: "$4.95"
            },
            {
                first: "Standard Courier Delivery",
                second: "UK mainland only",
                third: "1-3 days\n" +
                    "Delivery 7.30am - 5.30am\n" +
                    "Monday - Friday",
                fourth: "$5.95"
            },
            {
                first: "Standard Courier Delivery",
                second: "Northern Ireland, Eire, Scilly Isles",
                third: "1-3 days\n" +
                    "Delivery 7.30am - 5.30am\n" +
                    "Monday - Friday",
                fourth: "$9.95"
            },
            {
                first: "Royal mail 1st Class Service (Order value $20 or less)",
                second: "All of UK & some European Countries",
                third: "1-3 days\n" +
                    "Monday - Saturday",
                fourth: "$3.95"
            },
            {
                first: "Priority courier pre 12pm Next Working Day",
                second: "UK mainland only",
                third: "\tPre 12pm\n" +
                    "Delivery 7.30am - 12pm\n" +
                    "Monday - Friday",
                fourth: "$8.95"
            },
            {
                first: "Royal mail 1st Class Service (Order value $20 or less)",
                second: "All of UK & some European Countries",
                third: "1-3 days\n" +
                    "Monday - Saturday",
                fourth: "$3.95"
            },
        ]

    const [html, setHtml] = useState('')
    useEffect(() => {
        foo()
    }, [])

    const foo = () => {
        for (let i = 0; i < tableData.length; i++) {
            setTimeout(() =>
                    setHtml(prev => {
                            return prev +
                                `<tr>
                                    <th>${tableData[i].first}</th>
                                    <th>${tableData[i].second}</th>
                                    <th>${tableData[i].third}</th>
                                    <th>${tableData[i].fourth}</th>
                                </tr>`
                        }
                    )
                , 400 * i)
        }
    }

    return (
        <TableWrapper>
            {Parser(html)}
        </TableWrapper>
    )
}

export default Table