import {Component, React} from "react";

class NavigationHeaderMobile extends Component {



    render() {
        return <header>
            <nav className="navbar navbar-expand-md site-nav">
                <div className="container-fluid">

                    <button className="navbar-toggler site-toggler" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                            aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#/home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#/joinus">Join Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#/aboutus">About us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    }
}

export default NavigationHeaderMobile