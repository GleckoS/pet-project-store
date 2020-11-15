import React from "react"
import {PageContainer} from "../../../../common/selectors/StyledComponents"
import PageTopInform from "../../../../common/components/PageTitle"
import {useForm} from "react-hook-form";
import styled from "@emotion/styled";

const Registration = () => {
    const pageTitle = "Register"

    const firstPartLegend = "Your Personal Details",
        secondPartLegend = "Your Password",
        thirdPartLegend = "Newsletter"

    const firstPartData =
        [
            {
                label: "First Name",
                name: "1",
                alertText: "First Name must be between 1 and 32 characters!"
            },
            {
                label: "Last Name",
                name: "2",
                alertText: "Last Name must be between 1 and 32 characters!"
            },
            {
                label: "E-Mail",
                name: "3",
                alertText: "E-Mail Address does not appear to be valid!"
            },
            {
                label: "Telephone",
                name: "4",
                alertText: "Telephone must be between 3 and 32 characters!"
            }
        ]

    const secondPartData =
        [
            {
                label: "Password",
                name: "5",
                alertText: "Password must be between 4 and 20 characters!"
            },
            {
                label: "Password Confirm",
                name: "6",
                alertText: "Password confirmation does not match password!"
            }
        ]


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
    width: 90%;
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
    text-align: right;
    & div{
        width: 80%;
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

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data: any) => console.log(data);


    return (
        <PageContainer>
            <PageTopInform pageTitle={pageTitle}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <FormPartLegend>{firstPartLegend}</FormPartLegend>
                    <FormInputWrapper>
                        <InputLabel>{firstPartData[0].label}</InputLabel>
                        <div>
                            <RegistrationInput name={firstPartData[0].name}
                                               ref={register({required: true, minLength: 1, maxLength: 32})}/>
                            {errors[firstPartData[0].name] && <span>{firstPartData[0].alertText}</span>}
                        </div>
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <InputLabel>{firstPartData[1].label}</InputLabel>
                        <div>
                            <RegistrationInput name={firstPartData[1].name}
                                               ref={register({required: true, minLength: 1, maxLength: 32})}/>
                            {errors[firstPartData[1].name] && <span>{firstPartData[1].alertText}</span>}
                        </div>
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <InputLabel>{firstPartData[2].label}</InputLabel>
                        <div>
                            <RegistrationInput name={firstPartData[2].name}
                                               ref={register({required: true,  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                            {errors[firstPartData[2].name] && <span>{firstPartData[2].alertText}</span>}
                        </div>
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <InputLabel>{firstPartData[3].label}</InputLabel>
                        <div>
                            <RegistrationInput name={firstPartData[3].name}
                                               ref={register({required: true, minLength: 3, maxLength: 32})}/>
                            {errors[firstPartData[3].name] && <span>{firstPartData[3].alertText}</span>}
                        </div>
                    </FormInputWrapper>
                </fieldset>
                <fieldset>
                    <FormPartLegend>{secondPartLegend}</FormPartLegend>
                    {secondPartData.map(item =>
                        <FormInputWrapper>
                            <InputLabel>{item.label}</InputLabel>
                            <div>
                                <RegistrationInput name={item.name}
                                                   ref={register({required: true, minLength: 4, maxLength: 20})}/>
                                {errors[item.name] && <span>{item.alertText}</span>}
                            </div>
                        </FormInputWrapper>
                    )}
                </fieldset>
                <fieldset>
                    <FormPartLegend>{thirdPartLegend}</FormPartLegend>
                    <FormInputWrapper>
                        <AltInputLabel>Subscribe</AltInputLabel>
                        <div>
                            <input type="radio" checked value="1" name="newsletter" ref={register({required: true})}/>
                            <label>Yes</label>
                            <input type="radio" value="0" name="newsletter" ref={register({required: true})}/>
                            <label>No</label>
                        </div>
                    </FormInputWrapper>
                </fieldset>
                <input type="submit"/>
            </form>
        </PageContainer>
    )
}

export default Registration
