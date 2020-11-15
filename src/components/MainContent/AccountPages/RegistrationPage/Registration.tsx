import React from "react"
import {PageContainer} from "../../../../common/selectors/StyledComponents"
import PageTopInform from "../../../../common/components/PageTitle"
import {useForm} from "react-hook-form";

const Registration = () => {
    const pageTitle = "Register"

    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = (data: any) => console.log(data);

    /*{errors.exampleRequired && <span>This field is required</span>}*/

    return (
        <PageContainer>
            <PageTopInform pageTitle={pageTitle}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend></legend>
                    <div>
                        <label></label>
                        <input name="" ref={register({required: true})}/>
                    </div>
                    <div>
                        <label></label>
                        <input name="" ref={register({required: true})}/>
                    </div>
                    <div>
                        <label></label>
                        <input name="" ref={register({required: true})}/>
                    </div>
                    <div>
                        <label></label>
                        <input name="" ref={register({required: true})}/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend></legend>
                    <div>
                        <label></label>
                        <input name="" ref={register({required: true})}/>
                    </div>
                    <div>
                        <label></label>
                        <input name="" ref={register({required: true})}/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend></legend>
                </fieldset>
                <input type="submit"/>
            </form>
        </PageContainer>
    )
}

export default Registration
