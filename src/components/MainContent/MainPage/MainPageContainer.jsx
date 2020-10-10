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


let mapStateToProps = (state) => {
    return {
        SliderFirstPartData: state.sFirstPartR.SliderData,
        SliderSecondPartData: state.sSecondPartR.SliderData
    }
}

export default connect(mapStateToProps, {})(MainPageContainer)