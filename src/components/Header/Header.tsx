import React from "react"
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderInform from "./HeaderInform/HeaderInform";
import HeaderAltNav from "./HeaderAltNav/HeaderAltNav";


const Header = () => {

    return(
        <header>
            <HeaderAltNav
            />
            <HeaderInform
            />
            <HeaderSearch
            />
            <HeaderNav
            />
        </header>
    )
}

export default Header