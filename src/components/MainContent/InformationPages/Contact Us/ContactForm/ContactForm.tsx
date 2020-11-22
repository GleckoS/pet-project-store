import React from "react";
import styled from "@emotion/styled";

const ContactForm = (props: any) => {

    const LocationTitle = styled.div`
    text-align: left;
    position: relative;
    margin: 30px 0 40px;
    font-size: 20px;
    color: #777777;
    font-weight:400;
    &::after{
        content: "";
        width: 1170px;
        height: 1px;
        background-color: #dddddd;
        position: absolute;
        bottom: -5px;
        left: 0;
    }
`
    const InputWrapper = styled.div`
    text-align: left;
    display: flex;
    margin: 30px;
    @media (max-width: 764px) {
        display: block;
    }
    & input{
        width: inherit;
        height: 35px;
        padding: 5.5px 10px 5.5px 33px;
        border: none;
        background-color: #f2f2f2;
        &:focus{
            box-shadow: 0 0 3px 3px rgba(0,0,0,.075);
        }
    }
    & textarea{
        width: inherit;
        padding: 5.5px 10px 5.5px 33px;
        border: none;
        background-color: #f2f2f2;
        &:focus{
            box-shadow: 0 0 3px 3px rgba(0,0,0,.075);
        }
    }
    & label{
        width: 16.6%;
            &::after{
            content: "*";
            color: red;
        }
    }
`
    const LabelBox = styled.div`
     width: 20%;
    @media (max-width: 764px) {
        width: 90%;
    }
`
    const InputBox = styled.div`
     width: 80%;
    @media (max-width: 764px) {
       width: 90%;
    }
`
    const Submit = styled.input`
    border: none;
    background-color: #E8CABA;
    padding: 8px 20px;
    color: #fff;
    border-radius: 6px;
`

    return (
        <React.Fragment>
            <LocationTitle>
                <legend>{props.formLegend}</legend>
            </LocationTitle>
            <div>
                <form onSubmit={props.handleSubmit(props.onSubmit)}>
                    {props.formData.map((item: any) =>
                        <InputWrapper>
                            <LabelBox>
                                <label>{item.label}</label>
                            </LabelBox>
                            <InputBox>
                                <input name={item.name} ref={props.register()}/>
                            </InputBox>
                        </InputWrapper>
                    )}
                    <Submit type="submit"/>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactForm