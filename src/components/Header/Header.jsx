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
                            <span><a href="#">Личный кабинет</a></span>
                        </div>
                        <div className={style.shortInform_panelItem}>
                            <span><a href="#">Закладки</a></span>
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
           {/* <sectin>
                <div>
                    <nav>
                        <ul>
                            <li><a href="#">BRAS<i className="fa fa-angle-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="">Item 1</a></li>
                                    <li><a href="">Item 2</a></li>
                                </ul>
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
                    </nav>
                    <div>

                    </div>
                </div>
            </sectin>*/}
            {/* Деление */}
        </header>
    )
}

export default Header