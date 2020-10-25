import React from "react";
import PageTopInform from "../../../../common/components/PageTitle";
import {PageContainer} from "../../../../common/selectors/StyledComponents";
import Location from "./Location/Location";

const Contact = () => {

    const pageTitle = "Contact Us"


    return (
        <PageContainer>
            <PageTopInform
                pageTitle={pageTitle}
                informTitle={null}
                informText={null}
            />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9528.00272513332!2d-6.259338!3d53.343244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b75976cbd%3A0xc23a96e8221139c!2s1%20Grafton%20Street%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1603560806968!5m2!1sen!2sus"
                width="1170" height="400" frameBorder="0" aria-hidden="false">
            </iframe>
            <Location/>
        </PageContainer>
    )
}

export default Contact