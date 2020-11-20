import React from "react";
import {
    FormInputWrapper,
    InputLabel,
    RegistrationInput,
    SubmitButton
} from "../../../../../common/selectors/StyledComponents";

const ChangePasswordForm = (props: any) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit(props.onSubmit)}>
                {props.formData.map((item: any) =>
                    <FormInputWrapper>
                        <InputLabel>{item.label}</InputLabel>
                        <RegistrationInput name={item.name} ref={props.register}/>
                    </FormInputWrapper>
                )}
                <SubmitButton type="submit">SUBMIT</SubmitButton>
            </form>
        </div>
    )
}

export default ChangePasswordForm