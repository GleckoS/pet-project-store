import React, {Component} from "react";
import MainPage from "./MainPage";
import {connect} from "react-redux";
import {
    setFifthPartData, setFirstPartData,
    setFourthPartData, setSecondPartData,
    setThirdPartData
} from "../../../redux/SliderReducer";
import Loading from "../../../common/components/Loading";


class MainPageContainer extends Component {

    componentDidMount() {
        // @ts-ignore //
        this.props.setFirstPartData()
        // @ts-ignore //
        this.props.setSecondPartData()
        // @ts-ignore //
        this.props.setThirdPartData()
        // @ts-ignore //
        this.props.setFourthPartData()
        // @ts-ignore //
        this.props.setFifthPartData()
    }
    render() {
        return (
            <>
                {
                    // @ts-ignore //
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