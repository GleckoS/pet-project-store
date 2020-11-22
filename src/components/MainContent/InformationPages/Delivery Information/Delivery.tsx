import React from "react";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import PageTopInform from "../../../../common/components/PageTitle";
import Table from "./Table/Table";
import DeliveryBottomInform from "./DeliveryBottomInform/DeliveryBottomInform";
import styled from "@emotion/styled";


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

    const tableData =
        [
            {
                id: "first",
                first: "SERVICE",
                second: "LOCATIONS",
                third: "DELIVERY SCHEDULE",
                fourth: "COST PER SHIPMENT"
            },
            {
                id: "second",
                first: "Royal mail 1st Class Service (Order value $20 or less)",
                second: "All of UK & some European Countries",
                third: "1-3 days\n" +
                    "Monday - Saturday",
                fourth: "$3.95"
            },
            {
                id: "third",
                first: "Royal mail Tracker (Order value $50 or less)",
                second: "All of UK",
                third: "1-3 days\n" +
                    "Monday - Saturday",
                fourth: "$4.95"
            },
            {
                id: "fourth",
                first: "Standard Courier Delivery",
                second: "UK mainland only",
                third: "1-3 days\n" +
                    "Delivery 7.30am - 5.30am\n" +
                    "Monday - Friday",
                fourth: "$5.95"
            },
            {
                id: "fifth",
                first: "Standard Courier Delivery",
                second: "Northern Ireland, Eire, Scilly Isles",
                third: "1-3 days\n" +
                    "Delivery 7.30am - 5.30am\n" +
                    "Monday - Friday",
                fourth: "$9.95"
            },
            {
                id: "sixth",
                first: "Priority courier pre 12pm Next Working Day",
                second: "UK mainland only",
                third: "\tPre 12pm\n" +
                    "Delivery 7.30am - 12pm\n" +
                    "Monday - Friday",
                fourth: "$8.95"
            }
        ]

    const TableWrapper = styled.table`
    max-width: 100%;
    margin: 0 auto;
    border-spacing: 0;
    & tr{
        & th{
         border: 1px solid #ddd;
         font-size: 14px;
         font-weight: 400;
         opacity: .8;
         text-align: left;
         padding: 15px 10px;
         width: 292.5px;
        }
    }
    & :first-child{
        background-color: #eee;
    }
    
`


    return (
        <PageContainer>
            <PageTopInform
                pageTitle={pageTitle}
                informTitle={informTitle}
                informText={informText}
            />
            <Table
                tableData={tableData}
                TableWrapper={TableWrapper}
            />
            <DeliveryBottomInform
                informTitle={bottomInformTitle}
                informText={bottomInformText}
            />
        </PageContainer>
    )
}

export default Delivery