export default function Sidepanel() {
    let sidenav = document.querySelector('.sidenav');

    let arrow_span = sidenav.querySelector('.sidenav__arrow');

    arrow_span.addEventListener('click', () => {

        sidenav.classList.toggle('sidenav_closed')
        arrow_span.classList.toggle('sidenav__arrow_closed')
    })
}
