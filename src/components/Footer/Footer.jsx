import React from "react";
import style from "./Footer.module.css"

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
                            <li><a href="#">About</a></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>MY ACCOUNT</h3>
                    </div>
                    <div>
                        <ul className={style.footerInform_ul}>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Gift Certificates</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Site map</a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>CONTACT US</h3>
                    </div>
                    <div>
                        <ul className={style.footerInform_ul}>
                            <li><a href="#">My Company Glasgow D04 89GR</a></li>
                            <li><a href="#">(800) 123-4567</a></li>
                            <li><a href="#">livedemo-admin@templatemonster.me</a></li>
                            <li><a href="#">7 Days a week from 9:00 am to 7:00 pm</a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <h3>MORE WAYS TO SHOP</h3>
                    </div>
                    <div>
                        <ul className={style.footerInform_ul}>
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Find a Wish List</a></li>
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