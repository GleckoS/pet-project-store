import React from "react";
import styled from "@emotion/styled";
import {SubmitButton} from "../../../../../common/selectors/StyledComponents";

const EditForm = (props: any) => {
    const RegistrationInput = styled.input`
    width: 100%;
    display: inline-block;
    color: #7f8187;
    height: 35px;
    padding: 5.5px 10px 5.5px 33px;
    border: none;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 4px;
    &:focus{
        box-shadow: 0 0 3px 3px rgba(0,0,0,.05);
    }
`
    const FormInputWrapper = styled.div`
    display: flex;
    & div{
            width: 85%;
    }
`
    const InputLabel = styled.label`
    width: 20%;
    line-height: 66px;
    &::after{
        content: "*";
        color: red;
    }
`
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            {props.formData.map((item: any) =>
                <FormInputWrapper>
                    <InputLabel>{item.label}</InputLabel>
                    <RegistrationInput name={item.name} defaultValue={item.value} ref={props.register}/>
                </FormInputWrapper>
            )}
            <SubmitButton type="submit">SUBMIT</SubmitButton>
        </form>
    )
}

export default EditForm