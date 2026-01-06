import {React, useState} from "react";
import TextBlock from "../components/TextBlock";
import DocumentsNavigationResponsive from "../components/RulesDocumentsNavigationResponsive";
import KaizenTeamDebateRules from "../components/rules/KaizenTeamDebateRules";

const CONTENT = {
    general:
        <TextBlock h2Content={"General rules"}
            pContent={"1.Don't hurt your opponent physically during debate."}>
        </TextBlock>,
    kaizen_team_debate: <KaizenTeamDebateRules/>,
    one_vs_all:
        <TextBlock h2Content={"One VS All Debate rules"}
            pContent={"1.Don't hurt your opponent physically during debate."}>
        </TextBlock>,
    kaizen_policy_debate:
    <TextBlock h2Content={"Kaizen Policy Debate rules"}
            pContent={"1.Don't hurt your opponent physically during debate."}>
        </TextBlock>,
    unified_voice_variation:
        <TextBlock h2Content={"Unified voice variation rules"}
            pContent={"1.Don't hurt your opponent physically during debate."}>
        </TextBlock>,
    hot_potato_debate:
        <TextBlock h2Content={"Hot Potato warmup rules"}
            pContent={"1.Don't hurt your opponent physically during debate."}>
        </TextBlock>,
    you_against_the_world:
        <TextBlock h2Content={"You against the world warmup rules"}
            pContent={"1.Don't hurt your opponent physically during debate."}>
        </TextBlock>,
};

export default function Rules() {
    const [doc, setDoc] = useState("general");

    return (
        <>
            <h1>Rules of debating at Kaizen Debate Club</h1>
            <DocumentsNavigationResponsive onChange={setDoc}/>
            {CONTENT[doc]}
        </>
    );
}
