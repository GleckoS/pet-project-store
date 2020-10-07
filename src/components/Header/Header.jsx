import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <header>
            {/* Деление */}
            <section className={style.shortInform_wrapper}>
                <div className={style.shortInform}>
                    <div className={style.shortInform_number}>
                        <span>24/7 CUSTOMER SERVICE - <a className={style.shortInform_numberLink} href="#"> (800) 123-4567</a></span>
                    </div>
                    <div className={style.shortInform_panel}>
                        <div className={style.shortInform_panelItem}>
                            <span>English</span>
                        </div>
                        <div className={style.shortInform_panelItem}>
                            <span>USD</span>
                        </div>
                        <div className={style.shortInform_panelItem}>
                            <span><a href="#">My account</a></span>
                        </div>
                        <div className={style.shortInform_panelItem}>
                            <span><a href="#">Wishlist</a></span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Деление */}
            <section className={style.searchMenu_wrapper}>
                <div className={style.searchMenu}>
                    <div className={style.searchMenu_logoWrapper}>
                        <a className={style.searchMenu_logo}><img src={"./logo-175x47.png"}/></a>
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
            {/* Деление */}
            <section>
                <div className={style.navBar}>
                    <nav className={style.navBar_nav}>
                        <ul className={style.navBar_navList}>
                            <li className={style.navBar_navList_dropDown}>
                                <a className={style.navBar_navList_dropDown_btn} href="#">BRAS</a>
                                <div className={style.navBar_navList_dropDown_content}>
                                    <div className={style.row}>
                                        <div className={style.column}>
                                            <h3>Category 1</h3>
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <a href="#">Link 3</a>
                                        </div>
                                        <div className={style.column}>
                                            <h3>Category 2</h3>
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <a href="#">Link 3</a>
                                        </div>
                                        <div className={style.column}>
                                            <h3>Category 3</h3>
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <a href="#">Link 3</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">PANTIES</a>
                            </li>
                            <li>
                                <a href="#">CORSETS</a>
                            </li>
                            <li>
                                <a href="#">SEXY</a>
                            </li>
                            <li>
                                <a href="#">SLEEP</a>
                            </li>
                            <li>
                                <a href="#">SWIM</a>
                            </li>
                            <li>
                                <a href="#">STOCKINGS</a>
                            </li>
                            <li>
                                <a href="#">ACCESSORIES</a>
                            </li>
                        </ul>
                        <span>
                            <a href="#">0 Item(s)</a>
                        </span>
                    </nav>

                </div>
            </section>
            {/* Деление */}
        </header>
    )
}

export default Header