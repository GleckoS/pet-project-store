import React from "react"
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderInform from "./HeaderInform/HeaderInform";
import HeaderAltNav from "./HeaderAltNav/HeaderAltNav";
import {connect} from "react-redux";


const Header = (props: any) => {

    return(
        <header>
            <HeaderAltNav
            />
            <HeaderInform
            />
            <HeaderSearch
            />
            <HeaderNav
                currentUser={props.currentUser}
            />
        </header>
    )
}

const MapStateToProps = (state: any) => {
    return{
        currentUser: state.loginReducer.currentUser
    }
}

export default  connect(MapStateToProps, {})(Header)