import React, { Component, useEffect, useRef } from "react";
import TextBlock from "../components/TextBlock";
import { useMediaQuery } from "react-responsive";
import Carousel from "bootstrap/js/dist/carousel";

const Card = (image, fullName, email, role) => {
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="Portrait" />
            <div className="card-body">
                <div className="card-title">{fullName}</div>
                <div className="card-text">
                    <ul>
                        <li className="my-0">{email}</li>
                        <li className="my-0">{role}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const membersCardList = [
    Card("images/portraits/abdulla.jpg","Abdulla Mohamed","abdulm@pjwstk.edu.pl","Club Supervisor"),
    Card("images/portraits/jeremi.jpg","Jeremi Lipniacki","jeremi.lipniacki@pjwstk.edu.pl","Co-founder / Organiser"),
    Card("images/portraits/kemal.jpg","Kemal Ozcan","kemal.ozcan@pjwstk.edu.pl","President / Organiser / Photographer"),
    Card("images/portraits/alex.jpg", "Aleksandra Moltchanova","aleksandra.moltchanova@pjwstk.edu.pl","Organiser / Designer"),
    Card("images/portraits/fillipp.jpg","Fillipp Klyshevich","fillipp.klyshevich@pjwstk.edu.pl","Co-founder / President / Organiser"),
    Card("images/portraits/amaliya.jpg", "Amaliya Parkhimovich","amaliya.parkhimovich@pjwstk.edu.pl","Co-founder / Organizer"),
    Card("images/portraits/ivan.jpg", "Ivan Abchuhskyi","ivan.abchuhskyi@pjwstk.edu.pl","Organiser")];


const CardsRow = () => {
    const membersCardsListFirstRow = [membersCardList[0], membersCardList[1], membersCardList[2], membersCardList[3]];
    const membersCardsListSecondRow = [membersCardList[4], membersCardList[5], membersCardList[6]];

    return (
        <div>
            Current Staff
            <div className="row row-cols-4 mt-3 py-2">
                {membersCardsListFirstRow.map((member, index) => (
                    <div className="col-sm" key={index}>
                        {member}
                    </div>
                ))}
            </div>

            Former Staff
            <div className="row row-cols-4 py-2">
                {membersCardsListSecondRow.map((member, index) => (
                    <div className="col-sm" key={index}>
                        {member}
                    </div>
                ))}
                <div className="col-sm"></div>
            </div>
        </div>
    );
};

export function CardsCarousel() {
    const carouselId = "carouselCards";
    const carouselRef = useRef(null);
    const instanceRef = useRef(null);

    useEffect(() => {
        if (!carouselRef.current) return;

        instanceRef.current = new Carousel(carouselRef.current, {
            interval: false,   // no auto sliding
            ride: false,
            pause: false,
            wrap: true,
            touch: true,
        });

        return () => {
            instanceRef.current?.dispose();
            instanceRef.current = null;
        };
    }, []);

    return (
        <div className="py-2 mb-5">
            <div id={carouselId} ref={carouselRef} className="carousel slide">
                <div className="carousel-inner">
                    {membersCardList.map((memberCard, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className="carousel-slide">{memberCard}</div>
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

const CardsResponsiveLayout = () => {
    const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
    const isMobile = !isDesktop;

    return (
        <>
            {isDesktop && <CardsRow />}
            {isMobile && <CardsCarousel />}
        </>
    );
};

class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1>About us</h1>

                <TextBlock
                    h2Content="Who are we?"
                    pContent={`The Kaizen Debate club was created by a group of passionate PJATK students.
Here, you can find information about our team, including the contact details and positions.`}
                />

                <CardsResponsiveLayout />

                <div className="py-2 my-2">
                    <hr />
                    <h2>Contact Us</h2>
                    <p>
                        We’re always looking to expand our team. If you believe that your skills can be beneficial to our
                        club, feel free to contact us about it. We’re currently in need of promoters and proofreaders, but
                        we’re open for suggestions as well!
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;