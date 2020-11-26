let initialSliderState = {
    SlidersData: [],
    isFetching: true
}
const SET_SLIDERS_DATA = "SET_SLIDERS_DATA"

const SliderDataReducer = (state = initialSliderState, action) => {
    switch (action.type) {
        case SET_SLIDERS_DATA: {
            return {
                ...state,
                SlidersData: action.slidersData,
                isFetching: false
            }
        }
        default: {
            return state
        }
    }
}
export default SliderDataReducer

const setAllSlidersData = (slidersData) => ({type: SET_SLIDERS_DATA, slidersData})

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