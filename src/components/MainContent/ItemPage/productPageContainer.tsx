import React from "react"
import ProductPageTemplate from "./productPageTemplate"
import {connect} from "react-redux"
import {setAnotherItemThunk, setItemData} from "../../../redux/itemPageReducer"
import Loading from "../../../common/components/Loading"
import {setItems} from "../../../redux/MainPageReducer";

type Props = {
    url: string,
    isFetching: string,
    setItemData: any,
    setItems: any,
    setAnotherItemThunk: any
}

class ProductPageContainer extends React.Component<Props, {}> {


    componentDidMount() {
        this.props.setItems()
        this.props.setItemData(this.props.url)
    }


    // @TODO: поправить ререндер
    // @TODO: на каждом открытии заново загружаеться фот
    componentDidUpdate(prevProps: Readonly<Props>) {
        if (prevProps.url !== this.props.url) {
            this.props.setAnotherItemThunk()
            this.props.setItemData(this.props.url)
        }
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
/*        type: state.itemPageReducer.type,
        sortBy: state.itemPageReducer.sortBy,*/
        itemsData: state.itemPageReducer.itemsData,
        items: state.sliderReducer.items,
        currentUser: state.loginReducer.currentUser,
        isLogged: state.loginReducer.isLogged
    }
}

export default connect(mapStateToProps, {setItemData, setItems, setAnotherItemThunk})(ProductPageContainer)

