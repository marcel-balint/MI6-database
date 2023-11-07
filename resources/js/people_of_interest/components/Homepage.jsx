import React, { useEffect, useState } from "react";
import "/resources/css/style.scss";
import People from "./People";
import Missions from "./Missions";
export default function Homepage({ content, setContent }) {
    const [open, setOpen] = useState(true);

    function toggleMenu() {
        setOpen(!open);
    }

    let choosenContent = null
        switch (content) {
            case '':

                choosenContent = <h1>Welcome to MI6</h1>

                break;

            case 'people_of_interest' :

                choosenContent = <People />

                break;

            case 'missions' :

                choosenContent = <Missions />

                break;

            default :

                break;
        }

    return (
        <div className="body">
            <nav className={"sidenav" + (open ? "" : " sidenav_closed")}>
                <div className="sidenav__content">
                    <img
                        src="https://classes.codingbootcamp.cz/assets/classes/1404/mi6-seal.png"
                        alt="seal"
                        className="sidenav__image"
                    />

                    <ul className="sidenav__links">
                        <li className="sidenav__link sidenav__link_active" onClick={() => setContent('')}>
                            <a href="#">Home</a>
                        </li>

                        <li className="sidenav__link" onClick={() => setContent('people_of_interest')}>
                            <a href="#">People of interest</a>
                        </li>

                        <li className="sidenav__link" onClick={() => setContent('missions')}>
                            <a href="#">Missions</a>
                        </li>
                    </ul>
                </div>

                <span
                    className={
                        "sidenav__arrow" +
                        (open ? "" : " sidenav__arrow_closed")
                    }
                    onClick={toggleMenu}
                ></span>
            </nav>

            <main>

               {choosenContent}

            </main>
        </div>
    );
}
