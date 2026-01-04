import {React,Component} from "react";
import TextBlock from "../components/TextBlock";
import {useMediaQuery} from "react-responsive";


const Card = (image,fullName,email,role) => {

    return <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap"></img>
        <div className="card-body">
            <div className="card-title">
                {fullName}
            </div>
            <div className="card-text">
                <ul>
                    <li className="my-0">{email}</li>
                    <li className="my-0">{role}</li>
                </ul>
            </div>
        </div>
    </div>

}

const membersCardList = [Card("images/portraits/plato.jpg","Mr. Kosiński","loremipsum@mail","Supervisor"),
    Card("images/portraits/plato.jpg","Mr. Malloy","loremipsum@mail","Defenstrator"),
    Card("images/portraits/plato.jpg","Fillip","loremipsum@mail","President"),
    Card("images/portraits/plato.jpg", "Amaliya","loremipsum@","Organizer"), Card("images/portraits/plato.jpg","Jeremi Lipniacki","s26743@pjwstk.edu.pl","Technician"),
    Card("images/portraits/plato.jpg", "Mikita","loremipsum@","lorem ipsum"),
    Card("images/portraits/plato.jpg", "Elia","loremipsum@","lorem ipsum")];


const CardsRow = () => {

    const membersCardsListFirstRow = [membersCardList[0],membersCardList[1],membersCardList[2],membersCardList[3]];
    const membersCardsListSecondRow = [membersCardList[4],membersCardList[5],membersCardList[6]];

    return <div>
        <div className="row row-cols-4 mt-3 py-2">
            {membersCardsListFirstRow.map((member, index) => (
            <div className="col-sm" key={index}>
                {member}
            </div>
            ))}
        </div>
        <div className="row row-cols-4 py-2">
            {membersCardsListSecondRow.map((member, index) => (
                <div className="col-sm" key={index}>
                    {member}
                </div>
            ))}
            <div className="col-sm"></div>
        </div>
    </div>
}

const CardsCarousel = () => {

    const membersCardsListFirstRow = [membersCardList[0],membersCardList[1],membersCardList[2],membersCardList[3]];

    return <div className="py-2 mb-5">
        <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {membersCardsListFirstRow.map((member, index) => (
                    <div className="carousel-item" key={index}>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselCards"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselCards"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}

const CardsResponsiveLayout = () => {

    const isDesktop = useMediaQuery({query: '(min-width: 800px)'});
    const isMobile = !isDesktop;

    return <>
        {isDesktop && <CardsRow></CardsRow>}
        {isMobile && <CardsCarousel></CardsCarousel>}
    </>

}


class AboutUs extends Component {

    render() {

        return <div>
            <h1>Who are we?</h1>
            <TextBlock pContent="The Debate club was created by a group of passionate PJATK students.
                Here, you can find information about our team, including the contact details and positions."
            ></TextBlock>
            <CardsResponsiveLayout></CardsResponsiveLayout>

            <div className="py-2 my-2">
                <hr></hr>
                <h2>Contact Us</h2>
                <p>
                    We’re always looking to expand our team. If you believe that your skills can be beneficial to our
                    club, feel free to contact us about it. We’re currently in need of promoters and proofreaders, but
                    we’re open for suggestions as well!
                </p>
            </div>
        </div>
    }

}




export default AboutUs