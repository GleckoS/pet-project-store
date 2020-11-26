import React, {Component} from "react"
import MainPage from "./MainPage"
import {connect} from "react-redux"
import {setNewsLetter, setSlidersData} from "../../../redux/MainPageReducer"
import Loading from "../../../common/components/Loading"

type Props = {
    RegisterThunk: any,
    SetUsersThunk: any,
    setSlidersData: any,
    isFetching: string
}

class MainPageContainer extends Component<Props, {}> {

    componentDidMount() {
        this.props.setSlidersData()
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
        SlidersData: state.sliderReducer.SlidersData,
        isFetching: state.sliderReducer.isFetching
    }
}

export default connect(mapStateToProps, {
    setNewsLetter,
    setSlidersData
})(MainPageContainer)