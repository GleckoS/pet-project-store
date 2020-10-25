import React from "react";
import styled from "@emotion/styled";
import {useForm} from "react-hook-form";

const ContactForm = () => {

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
    ;
`
    const LabelBox = styled.div`
     width: 20%;
`
    const InputBox = styled.div`
     width: 80%;
`
    const Submit = styled.input`
    border: none;
    background-color: #E8CABA;
    padding: 8px 20px;
    color: #fff;
    border-radius: 6px;
`
    type Inputs = {
        name: string,
        Email: string,
        enquiry: string
    };

    const {register, handleSubmit, watch, errors} = useForm<Inputs>();
    const onSubmit = (data: any) => alert(data.name + " | " + data.Email + " | " + data.enquiry);
    // TODO: `use .map`
    return (
        <React.Fragment>
            <LocationTitle>
                <legend>Contact Form</legend>
            </LocationTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <InputWrapper>
                        <LabelBox>
                            <label>YOUR NAME</label>
                        </LabelBox>
                        <InputBox>
                            <input name="name" ref={register({required: true})}/>
                            {errors.name && <p>This field is required</p>}
                        </InputBox>
                    </InputWrapper>

                    <InputWrapper>
                        <LabelBox>
                            <label>E-MAIL ADDRESS</label>
                        </LabelBox>
                        <InputBox>
                            <input name="Email" ref={register({required: true})}/>
                            {errors.Email && <p>This field is required</p>}
                        </InputBox>
                    </InputWrapper>

                    <InputWrapper>
                        <LabelBox>
                            <label>ENQUIRY</label>
                        </LabelBox>
                        <InputBox>
                            <textarea rows={10} name="enquiry" ref={register({required: true})}/>
                            {errors.enquiry && <p>This field is required</p>}
                        </InputBox>
                    </InputWrapper>

                    <Submit type="submit"/>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactForm