import React from "react"
import {PageContainer} from "../../../common/selectors/StyledComponents"
import ProductTopInform from "./ProductTopInform/ProductTopInform"
import ProductMainContent from "./ProductMainContent/ProductMainContent"

const ProductPageTemplate = (props: any) => {
 return (
        <PageContainer>
            <ProductTopInform
                productTitle={props.itemsData.productTitle}
                productImg={props.itemsData.productImg}
                productInformPartOne={props.itemsData.productInformPartOne}
                productInformPartTwo={props.itemsData.productInformPartTwo}
                productInformPartThree={props.itemsData.productInformPartThree}
                productInformPartFour={props.itemsData.productInformPartFour}
                pageTitle={props.itemsData.pageTitle}
            />
            <ProductMainContent/>
        </PageContainer>
    )
}

export default ProductPageTemplate