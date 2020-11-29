import React from "react"
import ProductPageTemplate from "./productPageTemplate"
import {connect} from "react-redux"
import {setItemData} from "../../../redux/itemPageReducer"
import Loading from "../../../common/components/Loading"
import {setItems} from "../../../redux/MainPageReducer";

type Props = {
    setItemData: any,
    url: string,
    isFetching: string,
    setItems: any
}

class ProductPageContainer extends React.Component<Props, {}> {


    componentDidMount() {
        this.props.setItems()
        this.props.setItemData(this.props.url)
    }

    componentDidUpdate() {
        // @TODO: поправить ререндер
        // @TODO: на каждом открытии заново загружаеться фото
    }

    render() {
        return (
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
        itemsData: state.itemPageReducer.itemsData,
        items: state.sliderReducer.items,
        currentUser: state.loginReducer.currentUser,
        isLogged: state.loginReducer.isLogged
    }
}

export default connect(mapStateToProps, {setItemData, setItems})(ProductPageContainer)

