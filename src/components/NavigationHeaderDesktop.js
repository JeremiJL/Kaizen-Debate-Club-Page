import {Component, React} from "react";

class NavigationHeaderDesktop extends Component {


    render() {
        return <header>
            <div className="navbar-list">
                <nav id="header_navbar" className="navbar justify-content-center navbar-expand-sm site-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#/rules">Rules</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#/joinus">Join Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#/aboutus">About us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    }
}

export default NavigationHeaderDesktop