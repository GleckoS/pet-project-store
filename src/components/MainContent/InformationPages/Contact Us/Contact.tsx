import React from "react";
import PageTopInform from "../../../../common/components/PageTitle";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import Location from "./Location/Location";
import ContactForm from "./ContactForm/ContactForm";
import {useForm} from "react-hook-form";

const Contact = () => {

    const pageTitle = "Contact Us"

    const formLegend = "Contact Form",
        formData =
            [
                {
                    label: "YOUR NAME",
                    name: "name"
                },
                {
                    label: "E-MAIL ADDRESS",
                    name: "eMail"
                },
                {
                    label: "ENQUIRY",
                    name: "enquiry"
                },
            ]

    const LocationData =
        [
            {
                img: "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/logo-175x47.png",
                fBefore: "",
                sTitle: "Bralette",
                sText: "My Company Glasgow D04 89GR",
                sBefore: ""
            },
            {
                fTitle: "Telephone",
                fText: "(800) 123-4567",
                fBefore: "./img/phone.png",
                sTitle: "Fax",
                sText: "(800) 2345-6789",
                sBefore: "./img/fax.png"
            },
            {
                fTitle: "Opening Times",
                fText: "7 Days a week from 9:00 am to 7:00 pm",
                fBefore: "./img/key.png",
                sTitle: "Comments",
                sText: "We are glad to hear from you",
                sBefore: "./img/chat.png"
            },
        ]

    type Inputs = {
        name: string,
        Email: string,
        enquiry: string
    };

    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit = (data: any) => alert(data.name + " | " + data.Email + " | " + data.enquiry);

    return (
        <PageContainer>
            <PageTopInform
                pageTitle={pageTitle}
                informTitle={null}
                informText={null}
            />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9528.00272513332!2d-6.259338!3d53.343244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b75976cbd%3A0xc23a96e8221139c!2s1%20Grafton%20Street%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1603560806968!5m2!1sen!2sus"
                width="100%" height="400" frameBorder="0" aria-hidden="false">
            </iframe>
            <Location
                LocationData={LocationData}
            />
            <ContactForm
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                formLegend={formLegend}
                formData={formData}
            />
        </PageContainer>
    )
}

export default Contact