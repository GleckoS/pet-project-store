import React from "react"
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderInform from "./HeaderInform/HeaderInform";


const Header = () => {

    return(
        <header>
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