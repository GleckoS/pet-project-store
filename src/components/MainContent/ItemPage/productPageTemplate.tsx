import React from "react";
import {PageContainer} from "../../../common/selectors/StyledComponents";
import ProductTopInform from "./ProductTopInform/ProductTopInform";
import ProductMainContent from "./ProductMainContent/ProductMainContent";

const ProductPageTemplate = (props: any) => {

    return (
        <PageContainer>
            <ProductTopInform/>
            <ProductMainContent/>
        </PageContainer>
    )
}

export default ProductPageTemplate