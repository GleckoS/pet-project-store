import React from "react";
import styled from "@emotion/styled";
import {SubmitButton} from "../../../../../common/selectors/StyledComponents";

const FormPartLegend = styled.legend`
    text-align: left;
    width: 100%;
    position: relative;
    font-size: 20px;
    padding-bottom: 10px;
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #dddddd;
    }
`
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
    width: 10%;
    line-height: 66px;
    &::after{
        content: "*";
        color: red;
    }
`
const AltInputLabel = styled.label`
    width: 10%;
    line-height: 66px;
`

const RegistrationForm = (props: any) => {

    const {legend, firstPartData, secondPartData, register, handleSubmit, errors, onSubmit} = props

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <FormPartLegend>{legend.first}</FormPartLegend>
                {firstPartData.map((item: { [key: string]: string, rules: any }) =>
                    <FormInputWrapper>
                        <InputLabel>{item.label}</InputLabel>
                        <div>
                            <RegistrationInput name={item.name}
                                               ref={register(...item.rules)}/>
                            {errors[item.name] && <span>{item.alertText}</span>}
                        </div>
                    </FormInputWrapper>
                )}
            </fieldset>
            <fieldset>
                <FormPartLegend>{legend.second}</FormPartLegend>
                {secondPartData.map((item: { [key: string]: string, rules: any }) =>
                    <FormInputWrapper>
                        <InputLabel>{item.label}</InputLabel>
                        <div>
                            <RegistrationInput type="password" name={item.name}
                                               ref={register(...item.rules)}/>
                            {errors[item.name] && <span>{item.alertText}</span>}
                        </div>
                    </FormInputWrapper>
                )}
            </fieldset>
            <fieldset>
                <FormPartLegend>{legend.third}</FormPartLegend>
                <FormInputWrapper>
                    <AltInputLabel>Subscribe</AltInputLabel>
                    <div>
                        <input type="radio" defaultChecked value="1" name="newsletter"
                               ref={register({required: true})}/>
                        <label>Yes</label>
                        <input type="radio" value="0" name="newsletter" ref={register({required: true})}/>
                        <label>No</label>
                    </div>
                </FormInputWrapper>
            </fieldset>
            <SubmitButton type="submit">SUBMIT</SubmitButton>
        </form>
    )
}

export default RegistrationForm