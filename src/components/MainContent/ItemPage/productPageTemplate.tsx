import React from "react";
import {PageContainer} from "../../../common/selectors/StyledComponents";
import ProductTopInform from "./ProductTopInform/ProductTopInform";
import ProductMainContent from "./ProductMainContent/ProductMainContent";

const ProductPageTemplate = (props: any) => {

    const productTitle = "SEXY",
        productImg = "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/category/category-8-240x200.png",
        productInformPartOne = "We are so lucky living in such a wonderful time. Our almost unlimited abilities give us a real freedom. Our society doesn’t have such strict foundations as there were hundred years ago. It is so good that we have an opportunity to make a choice. Lingerie wasn’t always so stylish and erotic. Actually the concept of lingerie being visually appealing was a development of the late 19th century. Nowadays the lingerie industry is one of the most successful business spheres. The magic of the lingerie is an undoubted fact because it is a way of self expression and it gives a pleasure and satisfaction..",
        productInformPartTwo = "Our store has a great choice of wonderful lingerie and you will be amazed by its variety. Our vendors and manufacturers guarantee the high quality of our goods. So you can buy goods of premium quality by a fair price. We cooperate with the great number of fashion houses and you can find many unique and original products here.",
        productInformPartThree = "You’ll be surprised by the variety and the quality of our materials. We always stay in touch with the latest fashion tendencies - that is why our goods are so popular and we have a great number of faithful customers all over the country. Our company has a perfect reputation and a great experience and our clients’ testimonials can prove this fact.",
        productInformPartFour = "We care about our clients and never let them down. We often provide different promos and you can get a good benefit. If you have some questions you can address our superb 24/7 online support system."

    const pageTitle = "ADD TITLE"


    return (
        <PageContainer>
            <ProductTopInform
                productTitle={productTitle}
                productImg={productImg}
                productInformPartOne={productInformPartOne}
                productInformPartTwo={productInformPartTwo}
                productInformPartThree={productInformPartThree}
                productInformPartFour={productInformPartFour}
                pageTitle={pageTitle}
            />
            <ProductMainContent/>
        </PageContainer>
    )
}

export default ProductPageTemplate