import React from "react";
import {
    FormInputWrapper,
    InputLabel,
    RegistrationInput,
    SubmitButton
} from "../../../../../common/selectors/StyledComponents";

const EditForm = (props: any) => {

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