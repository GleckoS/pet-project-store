let initialSliderState = {
    SliderFirstPartData: [],
    SliderSecondPartData: [],
    SliderThirdPartData: [],
    SliderFourthPartData: [],
    SliderFifthPartData: [],
    isFetching: true
}
const SET_FIRST_SLIDER_DATA = "SET_FIRST_SLIDER_DATA",
    SET_SECOND_SLIDER_DATA = "SET_SECOND_SLIDER_DATA",
    SET_THIRD_SLIDER_DATA = "SET_THIRD_SLIDER_DATA",
    SET_FOURTH_SLIDER_DATA = "SET_FOURTH_SLIDER_DATA",
    SET_FIFTH_SLIDER_DATA = "SET_FIFTH_SLIDER_DATA"

const SliderDataReducer = (state = initialSliderState, action) => {
    switch (action.type) {
        case SET_FIRST_SLIDER_DATA: {
            return {
                ...state,
                SliderFirstPartData: action.sliderData
            }
        }
        case SET_SECOND_SLIDER_DATA: {
            return {
                ...state,
                SliderSecondPartData: action.sliderData
            }
        }
        case SET_THIRD_SLIDER_DATA: {
            return {
                ...state,
                SliderThirdPartData: action.sliderData
            }
        }
        case SET_FOURTH_SLIDER_DATA: {
            return {
                ...state,
                SliderFourthPartData: action.sliderData
            }
        }
        case SET_FIFTH_SLIDER_DATA: {
            return {
                ...state,
                SliderFifthPartData: action.sliderData,
                isFetching: false
            }
        }
        default: {
            return state
        }
    }
}
export default SliderDataReducer

const setFirstSliderData = (sliderData) => ({type: SET_FIRST_SLIDER_DATA, sliderData})
const setSecondSliderData = (sliderData) => ({type: SET_SECOND_SLIDER_DATA, sliderData})
const setThirdSliderData = (sliderData) => ({type: SET_THIRD_SLIDER_DATA, sliderData})
const setFourthSliderData = (sliderData) => ({type: SET_FOURTH_SLIDER_DATA, sliderData})
const setFifthSliderData = (sliderData) => ({type: SET_FIFTH_SLIDER_DATA, sliderData})

export const setFirstPartData = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/firstSlider`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setFirstSliderData(response))
                }
            )
    }
}

export const setSecondPartData = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/secondSlider`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setSecondSliderData(response))
                }
            )
    }
}

export const setThirdPartData = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/thirdSlider`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setThirdSliderData(response))
                }
            )
    }
}

export const setFourthPartData = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/fourthSlider`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setFourthSliderData(response))
                }
            )
    }
}

export const setFifthPartData = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/fifthSlider`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setFifthSliderData(response))
                }
            )
    }
}