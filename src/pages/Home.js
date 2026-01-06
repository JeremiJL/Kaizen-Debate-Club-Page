import {React,Component} from "react";
import ReactDOM from "react-dom/client";
import TextBlock from "../components/TextBlock"

class Home extends Component {
    render() {
        return <div>
            <div className="hero hero--video">
                <video
                    className="homeBackGroundVideo"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src="/videos/loop.mp4" type="video/mp4"/>
                </video>

                <div className="hero__overlay"/>

                <div className="hero__content">
                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <h1>Kaizen Debate Club</h1>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Japanese for "Continuous Improvement"
                        </figcaption>
                    </figure>
                </div>
            </div>
            <TextBlock h2Content={"What do we do?"}
                       pContent={" During our meetings, we perform a variety of activities: public speaking workshops, negotiation exercises, members-driven lectures, etc. We also conduct debate sessions from time to time, to keep our skills sharp. And to prevent boredom from setting in, we also like to play speaking games together!"}>
            </TextBlock>
            <TextBlock h2Content={"Why should you join?"}
                       children={<RowSection></RowSection>}>
            </TextBlock>
        </div>
    }
}

class RowSection extends Component {
    render() {

        return <div>
            <Row leftColContent={"Learn how to debate"}
                 rightColContent={"Build yours and demolish others’ arguments, all while learning how to withstand stress and scrutiny."}>
            </Row>
            <Row leftColContent={"Improve soft skills"}
                 rightColContent={"Confidence, negotiation, conflict management, critical thinking, emotional intelligence - these skills will surely help you stand out on the job market."}>
            </Row>
            <Row leftColContent={"Something for everyone"}
                 rightColContent={"We conduct public speaking exercises, team games, negotiation workshops, as well as classical debate sessions."}>
            </Row>
            <Row leftColContent={"Practice your English"}
                 rightColContent={"Practice English language in a formal, work-like setting."}>
            </Row>
            <Row leftColContent={"Network with others"}
                 rightColContent={" Meet and connect with various people in our club. Anyone could become your future colleague."}>
            </Row>

        </div>

    }
}

class Row extends Component {
    render() {

        return <div className="row container-flex py-2 mb-1">
            <div className="title-column col-sm-3">
                <p>{this.props.leftColContent}</p>
            </div>

            <div className="col-sm">
                <p>{this.props.rightColContent}</p>
            </div>
        </div>

    }
}


export default Home