import React from "react";

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

    return (
        <props.TableWrapper>
            {props.tableData.map((item: any) =>
                <tr>
                    <th>{item.first}</th>
                    <th>{item.second}</th>
                    <th>{item.third}</th>
                    <th>{item.fourth}</th>
                </tr>
            )}
        </props.TableWrapper>
    )
}

export default Table