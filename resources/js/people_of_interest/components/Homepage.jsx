import React, { useState } from 'react';
import '/resources/css/style.scss'
import Sidepanel from './Sidepanel';
export default function Homepage() {

    const [open, setOpen] = useState(1)

    return (
        <div className='body'>
            <nav className="sidenav">
                <div className="sidenav__content">
                    <img src="https://classes.codingbootcamp.cz/assets/classes/1404/mi6-seal.png" alt="seal" className="sidenav__image"/>

                    <ul className="sidenav__links">

                        <li className="sidenav__link sidenav__link_active"><a href="#">Home</a></li>

                        <li className="sidenav__link"><a href="#">People of interest</a></li>

                    </ul>

                </div>

                <button className="sidenav__arrow" onClick={ () => { setOpen (open - 1) }}></button>
                <span className="sidenav__arrow" onClick={ () => { setOpen (open + 1) }}></span>
            </nav>

            <main>
                <h1>Welcome to MI6</h1>
            </main>

        </div>
    )
}