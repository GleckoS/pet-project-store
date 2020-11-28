import React from "react";
import styled from "@emotion/styled";

const Table = (props: any) => {


    /* Забавный но бесполезный кусок кода :)

    const [html, setHtml] = useState('')

    useEffect(() => {
        foo()
    }, [])

    const foo = () => {
        for (let i = 0; i < props.tableData.length; i++) {
            setTimeout(() =>
                    setHtml(prev => {
                    return prev +
                        `<tr class=${props.tableData[i].id}>
                            <th>${props.tableData[i].first}</th>
                            <th>${props.tableData[i].second}</th>
                            <th>${props.tableData[i].third}</th>
                            <th>${props.tableData[i].fourth}</th>
                        </tr>`
                    }
                )
                , 0 * i)
        }       /!* 1000 * i *!/
    }

    {Parser(html)}
*/
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

    return (
        <TableWrapper>
            {props.tableData.map((item: any) =>
                <tr>
                    <th>{item.first}</th>
                    <th>{item.second}</th>
                    <th>{item.third}</th>
                    <th>{item.fourth}</th>
                </tr>
            )}
        </TableWrapper>
    )
}

export default Table