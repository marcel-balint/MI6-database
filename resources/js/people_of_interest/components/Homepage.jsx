import React from 'react';
import '/resources/css/style.scss'
export default function Homepage() {

    // let sidenav = document.querySelector('.sidenav');

    // let arrow_span = sidenav.querySelector('.sidenav__arrow');

    // arrow_span.addEventListener('click', () => {

    //     sidenav.classList.toggle('sidenav_closed')
    //     arrow_span.classList.toggle('sidenav__arrow_closed')
    // })

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
            <span className="sidenav__arrow"></span>
            </nav>

            <main>
            <h1>Welcome to MI6</h1>
            </main>

        </div>
    )
}