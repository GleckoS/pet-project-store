import React, {Component} from "react"
import MainPage from "./MainPage"
import {connect} from "react-redux"
import {setItems, setNewsLetter, setSlidersData} from "../../../redux/MainPageReducer"
import Loading from "../../../common/components/Loading"

type Props = {
    RegisterThunk: any,
    SetUsersThunk: any,
    setItems: any,
    isFetching: string,
    setSlidersData: any
}

class MainPageContainer extends Component<Props, {}> {

    componentDidMount() {
        this.props.setItems()
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
        isFetching: state.sliderReducer.isFetching,
        items: state.sliderReducer.items,
        isLogged: state.loginReducer.isLogged,
        currentUser: state.loginReducer.currentUser
    }
}

export default connect(mapStateToProps, {
    setNewsLetter,
    setItems,
    setSlidersData
})(MainPageContainer)