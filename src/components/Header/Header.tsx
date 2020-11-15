import React from "react"
import style from "./Header.module.css"
import {NavLink} from "react-router-dom"

const Header = () => {

    const currentLanguage = "English"

    const firstColumnData =
        [
            {
                name: "BRA SETS",
                url: "bra-sets"
            },
            {
                name: "Balconette bras",
                url: "balconette-bras"
            },
            {
                name: "Multiway bras",
                url: "multiway-bras"
            },
            {
                name: "Full cup bras",
                url: "full-cup-bras"
            },
            {
                name: "Lingerie brands",
                url: "lingerie-brands"
            },
            {
                name: "Minimiser bras",
                url: "minimiser-bras"
            }
        ]
    const secondColumnData =
        [
            {
                name: "PANTIES",
                url: "panties"
            },
            {
                name: "Bikini",
                url: "bikini"
            },
            {
                name: "Laist-waist",
                url: "laist-waist"
            },
            {
                name: "High-leg",
                url: "high-leg"
            },
            {
                name: "Cotton",
                url: "cotton"
            },
            {
                name: "Lace-Up",
                url: "lace-up"
            },
            {
                name: "Dream",
                url: "dream"
            }
        ]
    const thirdColumnData =
        [
            {
                name: "BRA SEPARATES",
                url: "bra-separates"
            },
            {
                name: "Stockings",
                url: "stockings"
            },
            {
                name: "Vinyl/Latex/Leather",
                url: "vinyl-latex-leather"
            },
            {
                name: "Sexy lingerie",
                url: "sexy-lingerie"
            },
            {
                name: "New in",
                url: "new-in"
            }
        ]
    const fourthColumnData =
        [
            {
                name: "BUSTIERS",
                url: "bustiers"
            },
            {
                name: "Corsets",
                url: "corsets"
            },
            {
                name: "Perfect",
                url: "perfect"
            },
            {
                name: "Waist cinchers",
                url: "waist-cinches"
            },
            {
                name: "Accessories",
                url: "accessories"
            }
        ]
    const searchData =
        [
            {
                name: "PANTIES",
                url: "panties"
            },
            {
                name: "CORSETS",
                url: "corsets"
            },
            {
                name: "SEXY",
                url: "sexy"
            },
            {
                name: "SLEEP",
                url: "sleep"
            },
            {
                name: "SWIM",
                url: "swim"
            },
            {
                name: "STOCKINGS",
                url: "stockings"
            },
            {
                name: "ACCESSORIES",
                url: "accessories"
            },
        ]

    return (
        <header>
            <section className={style.shortInform_wrapper}>
                <div className={style.shortInform}>
                    <div className={style.shortInform_number}>
                        <span>24/7 CUSTOMER SERVICE - <a className={style.shortInform_numberLink} href="#"> (800) 123-4567</a></span>
                    </div>
                    <div className={style.shortInform_panel}>
                        <div className={style.shortInform_panelItem}>
                            <span>{currentLanguage}</span>
                        </div>
                        <div className={style.shortInform_panelItem}>
                            <span>USD</span>
                        </div>
                        <div className={style.shortInform_panelItem}>
                            <span><NavLink to="/login">My account</NavLink></span>
                        </div>
                        <div className={style.shortInform_panelItem}>
                            <span><a href="#">Wishlist</a></span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.searchMenu_wrapper}>
                <div className={style.searchMenu}>
                    <div className={style.searchMenu_logoWrapper}>
                        <NavLink to="/"><img
                            src={"https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/logo-175x47.png"}/></NavLink>
                    </div>
                    <div>
                        <form className={style.searchMenu_inputWrapper}>
                            <input className={style.searchMenu_input} placeholder="I'm looking for..."/>
                            <button className={style.searchMenu_inputButton}>Search</button>
                        </form>
                    </div>
                    <div className={style.searchMenu_AddButtons_Wrapper}>
                        <a className={style.searchMenu_AddButtons} href="#">Free Shipping WORLDWIDE</a>
                        <a className={style.searchMenu_AddButtons} href="#">Daily Deals & Offers</a>
                    </div>
                </div>
            </section>
            <section>
                <div className={style.navBar}>
                    <nav className={style.navBar_nav}>
                        <ul className={style.navBar_navList}>

                            <li className={style.navBar_navList_dropDown}>
                                <NavLink className={style.navBar_navList_dropDown_btn} to="bras">BRAS {'>'}</NavLink>
                                <div className={style.navBar_navList_dropDown_content}>
                                    <div className={style.row}>
                                        <div className={style.column}>
                                            {
                                                firstColumnData.map(item =>
                                                    <NavLink to={item.url}>{item.name}</NavLink>
                                                )
                                            }
                                        </div>
                                        <div className={style.column}>
                                            {
                                                secondColumnData.map(item =>
                                                    <NavLink to={item.url}>{item.name}</NavLink>
                                                )
                                            }
                                        </div>
                                        <div className={style.column}>
                                            {
                                                thirdColumnData.map(item =>
                                                    <NavLink to={item.url}>{item.name}</NavLink>
                                                )
                                            }
                                        </div>
                                        <div className={style.column}>
                                            {
                                                fourthColumnData.map(item =>
                                                    <NavLink to={item.url}>{item.name}</NavLink>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {
                                searchData.map(item =>
                                    <li>
                                        <NavLink to={item.url}>{item.name}</NavLink>
                                    </li>
                                )
                            }

                        </ul>
                        <span>
                            <a href="#">0 Item(s)</a>
                        </span>
                    </nav>

                </div>
            </section>
        </header>
    )
}

export default Header