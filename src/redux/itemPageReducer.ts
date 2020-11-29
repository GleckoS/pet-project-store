let initialSliderState = {
    itemsData: [],
    isFetching: true,
    type: "block",// or stroke
    sortBy: "Default",// or: Name(A-Z) ; Name(Z-A) ; Price(Low > High) ; Price(High > Low) ; Rating(Highest) ; Rating(Lowest) ; Model(A-Z) ; Model(Z-A)
}
const SET_ITEMS_DATA = "SET_ITEMS_DATA",
    SET_ANOTHER_ITEMS = "SET_ANOTHER_ITEMS"

const ItemsDataReducer = (state = initialSliderState, action: any) => {
    switch (action.type) {
        case SET_ITEMS_DATA: {
            return {
                ...state,
                itemsData: action.itemsData,
                isFetching: false
            }
        }
        case SET_ANOTHER_ITEMS: {
            return {
                ...state,
                isFetching: true
            }
        }
        default: {
            return state
        }
    }
}

export default ItemsDataReducer

const setItemsData = (itemsData: object) => ({type: SET_ITEMS_DATA, itemsData})
const setAnotherItem = () => ({type: SET_ANOTHER_ITEMS})

export const setItemData = (currentPage: string) => {
    return (dispatch: any) => {
        fetch(`http://localhost:8000/${currentPage}`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setItemsData(response))
                }
            )
    }
}

export const  setAnotherItemThunk = () => {
    return (dispatch: any) =>{
        dispatch(setAnotherItem())
    }
}
