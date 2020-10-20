import React, {Component} from "react";
import MainPage from "./MainPage";
import {connect} from "react-redux";


class MainPageContainer extends Component{

render() {
    return(
        <MainPage {...this.props}/>
    )
}
}


let mapStateToProps = (state: any) => {
    return {
        SliderFirstPartData: state.sFirstPartR.SliderData,
        SliderSecondPartData: state.sSecondPartR.SliderData,
        SliderThirdPartData: state.sThirdPartR,
        SliderFourthPartData: state.sFourthPartR.SliderData,
        SliderFifthPartData: state.sFifthPartR
    }
}

export default connect(mapStateToProps, {})(MainPageContainer)