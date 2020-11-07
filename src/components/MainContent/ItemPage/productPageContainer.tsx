import React from "react"
import ProductPageTemplate from "./productPageTemplate"
import {connect} from "react-redux"
import {setItemData} from "../../../redux/itemPageReducer"
import Loading from "../../../common/components/Loading"

type Props =  {
    setItemData: any,
    url: string,
    isFetching: string
}

class ProductPageContainer extends React.Component<Props, {}>{

    componentDidMount() {
        this.props.setItemData(this.props.url)
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>) {
        this.props.setItemData(this.props.url)
    }

    render() {
        return(
        <>
            {
                !this.props.isFetching
                    ? <ProductPageTemplate {...this.props}/>
                    : <Loading/>
            }
        </>
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        isFetching: state.itemPageReducer.isFetching,
        type: state.itemPageReducer.type,
        sortBy: state.itemPageReducer.sortBy,
        itemsData: state.itemPageReducer.itemsData
    }
}

export default connect(mapStateToProps, {setItemData})(ProductPageContainer)

