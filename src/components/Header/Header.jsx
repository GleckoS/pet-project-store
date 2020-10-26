import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
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
            <section className={style.searchMenu_wrapper}>
                <div className={style.searchMenu}>
                    <div className={style.searchMenu_logoWrapper}>
                        <NavLink to="/"><img src={"https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/logo-175x47.png"}/></NavLink>
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
                                <a className={style.navBar_navList_dropDown_btn} href="#">BRAS</a>
                                <div className={style.navBar_navList_dropDown_content}>
                                    <div className={style.row}>
                                        <div className={style.column}>
                                            <h3>BRA SETS</h3>
                                            <a href="#">Balconette bras</a>
                                            <a href="#">Multiway bras</a>
                                            <a href="#">Full cup bras</a>
                                            <a href="#">Raw Cut</a>
                                            <a href="#">Lingerie brands</a>
                                            <a href="#">Minimiser bras</a>
                                        </div>
                                        <div className={style.column}>
                                            <h3>PANTIES</h3>
                                            <a href="#">Bikini</a>
                                            <a href="#">Laist-waist</a>
                                            <a href="#">High-leg</a>
                                            <a href="#">Cotton1</a>
                                            <a href="#">Lace-Up</a>
                                            <a href="#">Dream</a>
                                        </div>
                                        <div className={style.column}>
                                            <h3>BRA SEPARATES</h3>
                                            <a href="#">Stockings</a>
                                            <a href="#">Vinyl/Latex/Leather</a>
                                            <a href="#">Sexy lingerie</a>
                                            <a href="#">New in</a>
                                        </div>
                                        <div className={style.column}>
                                            <h3>BUSTIERS</h3>
                                            <a href="#">Corsets</a>
                                            <a href="#">Perfect</a>
                                            <a href="#">Waist cinchers</a>
                                            <a href="#">Accessories</a>
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