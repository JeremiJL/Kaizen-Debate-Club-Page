import {React,Component} from "react";
import TextBlock from "../components/TextBlock";
import {useMediaQuery} from "react-responsive";
import RulesDocumentsNavigationResponsive from  "../components/RulesDocumentsNavigationResponsive";



class Rules extends Component {

    render() {

        return <div>
            <h1>Rules of debating at Kaizen Debate Club</h1>
            <RulesDocumentsNavigationResponsive></RulesDocumentsNavigationResponsive>
        </div>



    }

}

export default Rules