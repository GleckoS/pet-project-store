import React, {Component} from "react"
import MainPage from "./MainPage"
import {connect} from "react-redux"
import {
    setFifthPartData, setFirstPartData,
    setFourthPartData, setSecondPartData,
    setThirdPartData
} from "../../../redux/SliderReducer"
import Loading from "../../../common/components/Loading"

type Props = {
    setFirstPartData: any,
    setSecondPartData: any,
    setThirdPartData: any,
    setFourthPartData: any,
    setFifthPartData: any,
    isFetching: string
}

class MainPageContainer extends Component<Props, {}> {

    componentDidMount() {
        this.props.setFirstPartData()
        this.props.setSecondPartData()
        this.props.setThirdPartData()
        this.props.setFourthPartData()
        this.props.setFifthPartData()
    }
    render() {
        return (
            <>
                {
                    !this.props.isFetching
                    ? <MainPage {...this.props}/>
                    : <Loading/>
                }
            </>
        )
    }
}


let mapStateToProps = (state: any) => {
    return {
        SliderFirstPartData: state.sliderReducer.SliderFirstPartData,
        SliderSecondPartData: state.sliderReducer.SliderSecondPartData,
        SliderThirdPartData: state.sliderReducer.SliderThirdPartData,
        SliderFourthPartData: state.sliderReducer.SliderFourthPartData,
        SliderFifthPartData: state.sliderReducer.SliderFifthPartData,
        isFetching: state.sliderReducer.isFetching
    }
}

export default connect(mapStateToProps, {
    setFirstPartData,
    setSecondPartData,
    setThirdPartData,
    setFourthPartData,
    setFifthPartData
})(MainPageContainer)