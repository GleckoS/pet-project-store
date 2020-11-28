let initialSliderState = {
    SlidersData: [],
    items: [],
    isFetching: true
}
const SET_SLIDERS_DATA = "SET_SLIDERS_DATA",
    SET_ITEMS = "SET_ITEMS"

const SliderDataReducer = (state = initialSliderState, action) => {
    switch (action.type) {
        case SET_SLIDERS_DATA: {
            return {
                ...state,
                SlidersData: action.slidersData,
                isFetching: false
            }
        }
        case SET_ITEMS: {
            return {
                ...state,
                items: action.items
            }
        }

        default: {
            return state
        }
    }
}
export default SliderDataReducer

const setAllSlidersData = (slidersData) => ({type: SET_SLIDERS_DATA, slidersData})
const setItemsData = (items) => ({type: SET_ITEMS, items})

export const setSlidersData = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/sliders`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setAllSlidersData(response))
                }
            )
    }
}
export const setItems = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/items`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setItemsData(response))
                }
            )
    }
}
export const setNewsLetter = (email) => {
    return () => {
        fetch(`http://localhost:8000/newsletter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        })
    }
}