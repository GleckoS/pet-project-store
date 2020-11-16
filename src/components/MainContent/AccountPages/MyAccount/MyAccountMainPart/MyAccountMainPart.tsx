import React from "react";
import {NavLink} from "react-router-dom";

const MyAccountMainPart = () => {

    const account = [{}]
    const accountw = [{}]

    return (
        <section>
            {account.map(item =>
                <div>
                    <h2></h2>
                    <ul>
                        {accountw.map(e =>
                            <li><NavLink to="/"></NavLink></li>
                        )}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default MyAccountMainPart