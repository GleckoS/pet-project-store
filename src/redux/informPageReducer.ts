let initialSliderState = {

}

const ItemsDataReducer = (state = initialSliderState, action: any) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}
export default ItemsDataReducer

export const sendContact = (data: any) => {
    return (dispatch: any) => {
        fetch(`http://localhost:8000/contactRequest`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}
