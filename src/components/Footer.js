import {Component, React} from "react";

class Footer extends Component {

    render() {
        return <footer id="footer" className="container-fluid mt-auto site-footer">
            <div className="row py-2">
                <div className="col text-center">
                    <div className="row">
                        <a href="/#home" className="py-1">Kaizen Debate Club</a>
                    </div>
                    <a className="icon" href="/#home">
                        <img src="/images/icons/logo.png" alt="Our Logo"/>
                    </a>
                </div>

                <div className="col d-flex justify-content-center">
                    <a className="pt-2" href="https://pja.edu.pl/en/">
                        <img id="pjait_logo" src="/images/icons/logo-pjatk-white-text.png" width="108" height="56"
                             alt="Polish-Japanese Academy of Information Technology"></img>
                    </a>
                </div>
                <div className="col socials-block">
                    <p className="socials-title">Follow our socials to stay up to date!</p>

                    <div className="social-columns">
                        <a className="icon" href="https://www.instagram.com/kaizendebateclub/">
                            <img src="/images/icons/instagram_logo_colorfull.svg" alt="Our Instagram"/>
                        </a>
                        <a className="icon" href="https://t.me/+eCriPG7oRrxjN2Uy">
                            <img src="/images/icons/telegram_logo_colorfull.svg" alt="Our Telegram"/>
                        </a>
                        <a className="icon" href="https://www.linkedin.com/company/kaizen-debate-club">
                            <img src="/images/icons/linkedin_logo_colorfull.svg" alt="Our LinkedIn"/>
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    }
}

export default Footer