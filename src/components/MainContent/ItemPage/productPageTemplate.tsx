import React from "react"
import {PageContainer} from "../../../common/selectors/StyledComponents"
import ProductTopInform from "./ProductTopInform/ProductTopInform"
import ProductMainContent from "./ProductMainContent/ProductMainContent"
import BreadCrumbs from "../../../common/components/BreadCrubms";

const ProductPageTemplate = (props: any) => {
    return (
        <PageContainer>
            <BreadCrumbs
                pageTitle={props.itemsData.productTitle}
            />
            <ProductTopInform
                productTitle={props.itemsData.productTitle}
                productImg={props.itemsData.productImg}
                productInformPartOne={props.itemsData.productInformPartOne}
                productInformPartTwo={props.itemsData.productInformPartTwo}
                productInformPartThree={props.itemsData.productInformPartThree}
                productInformPartFour={props.itemsData.productInformPartFour}
                pageTitle={props.itemsData.pageTitle}
            />
            <ProductMainContent
                isLogged={props.isLogged}
                currentUser={props.currentUser}
                items={props.items}
            />
        </PageContainer>
    )
}

export default ProductPageTemplate