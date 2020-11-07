import React from "react";
import ProductPageTemplate from "./productPageTemplate";
import {setItemData} from "../../../redux/itemPageReducer";

type Props =  {
    url: string
}


class ProductPageContainer extends React.Component<Props, {}>{

    componentDidMount() {
        setItemData(this.props.url)
    }

    render() {
        return <ProductPageTemplate/>;
    }
}

export default ProductPageContainer