import React from "react";
import style from "./Footer.module.css"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className={style.footerInform_wrapper}>
                <section>
                    <div>
                        <h3>INFORMATION</h3>
                    </div>
                    <div>
                        <ul className={style.footerInform_ul}>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="#">Delivery Information</NavLink></li>
                            <li><NavLink to="#">Privacy Policy</NavLink></li>
                            <li><NavLink to="#">Terms & Conditions</NavLink></li>
                            <li><NavLink to="#">Contact us</NavLink></li>
                            <li><NavLink to="#">Returns</NavLink></li>
                            <li><NavLink to="#">Blog</NavLink></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>MY ACCOUNT</h3>
                    </div>
                    <div>
                        <ul className={style.footerInform_ul}>
                            <li><NavLink to="#">My Account</NavLink></li>
                            <li><NavLink to="#">Order History</NavLink></li>
                            <li><NavLink to="#">Gift Certificates</NavLink></li>
                            <li><NavLink to="#">Affiliates</NavLink></li>
                            <li><NavLink to="#">Site map</NavLink></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>CONTACT US</h3>
                    </div>
                    <div>
                        <ul className={style.footerInform_ul}>
                            <li><NavLink to="#">My Company Glasgow D04 89GR</NavLink></li>
                            <li><NavLink to="#">(800) 123-4567</NavLink></li>
                            <li><NavLink to="#">livedemo-admin@templatemonster.me</NavLink></li>
                            <li><NavLink to="#">7 Days a week from 9:00 am to 7:00 pm</NavLink></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>MORE WAYS TO SHOP</h3>
                    </div>
                    <div>
                        <ul className={style.footerInform_ul}>
                            <li><NavLink to="#">Find a Store</NavLink></li>
                            <li><NavLink to="#">Find a Wish List</NavLink></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>GET CONNECTED</h3>
                    </div>
                    <div>
                        <ul className={style.footerInform_ul}>
                            <li><p>Like, share, or follow for exclusive info!</p></li>
                            <li><a href="#">Social</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer