import {React,Component} from "react";
import ReactDOM from "react-dom/client";
import TextBlock from "../components/TextBlock";


class JoinUs extends Component {

    render() {

        return <div>
            <h1> Join Us! </h1>
            <TextBlock h2Content="Participate as a guest"
                pContent={"Our meetings are open for everybody, you don’t need to sing up to participate — simply come to our" +
                    "                    next meeting!" +
                    "                    Kaizen Debate Club offers various activities designed for newcomers, so don't be" +
                    "                    discouraged if you lack debating experience."}
            >
            </TextBlock>
            <TextBlock h2Content="Become a member"
                           pContent={"Debate club members can participate in our debate sessions. The can also play the role of judges," +
                               "                    fact-checkers and vote on important matters. Moreover, you will be added to our group chat!" +
                               "                    To join us, speak with us during the meeting or email us."}
            >
            </TextBlock>
            <hr/>
            <TextBlock h2Content={"Contribute to our meetings"}
                       pContent={"Kaizen Debate Club is made by students, for students. To make our meetings engaging and practical, our members prepare their own presentations, exercises, debate topics, etc. If you’d like to organize something of your own, contact us."}></TextBlock>
            <TextBlock h2Content={"Join our team of organisers!"}
                       pContent={"We’re looking to expand our team, so if you believe that your skills can be beneficial to our club, feel free to contact us about it."}
            ></TextBlock>
            <SideNote></SideNote>
        </div>

    }

}

class SideNote extends Component {

    render() {
        return <div className="container-flex pt-2">
            <p className="side-note">
                We encourage everyone to treat our meetings as a formal occasion. That means dressing nicely, respecting
                each other, and minding your manners. That's not a "rule" you're forced to follow, that's simply our
                culture!
            </p>
        </div>
    }
}

export default JoinUs