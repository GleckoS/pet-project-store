import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import PageTopInform from "../../../../common/components/PageTitle";
import Table from "./Table/Table";
import DeliveryBottomInform from "./DeliveryBottomInform/DeliveryBottomInform";


const Delivery = () => {

    const pageTitle = "Delivery Information"

    const informTitle = "HELLO AND WELCOME TO THE SHIPPING AND DELIVERY INFORMATION PAGE!" +
        " HERE YOU CAN GET ACQUAINTED WITH USEFUL INFORMATION ON TERMS AND CONDITIONS OF OUR GOODS DELIVERY.",
        informText = "You can purchase your items online and pick them up at our street store," +
            " or ship them directly to your doorstep. Shipping is free on some orders." +
            " We use the best carriers in the business to make sure your order gets to you on time. " +
            "From the Secure Checkout page you'll see your item description, price and delivery timing." +
            " Where available, you can also choose a faster delivery method for each item on your order, " +
            "for an additional fee. Delivery times vary according to your selected delivery address," +
            " availability of your items and the time of day you place your order."

    const bottomInformTitle = "FREE DELIVERY",
        bottomInformText = "Free two-day shipping is available on in-stock items. " +
            "You can see in your bag if your item is in stock. Free two-day shipping is not available on customized," +
            " engraved products, and for certain order types, " +
            "including orders paid for with financing or by bank transfer. " +
            "To get free two-day shipping, you will need to place your order by 5pm, " +
            "Monday to Friday. For instance, if you order your goods before 5:00 pm, " +
            "Monday to Friday we will deliver them in two business days."


    return (
        <PageContainer>
            <PageTopInform
                pageTitle={pageTitle}
                informTitle={informTitle}
                informText={informText}
            />
            <Table/>
            <DeliveryBottomInform
                informTitle={bottomInformTitle}
                informText={bottomInformText}
            />
        </PageContainer>
    )
}

export default Delivery