import {Neutral} from '../main/Neutral.jsx';
import {Confirmation} from '../main/Confirmation.jsx';
import {SelfReport} from '../main/SelfReport.jsx';
import {useState} from 'react';

export const StateController = props => {

    const [activeState, setActiveState] = useState(props.initState);

    const triggerNeutral = () => {
        setActiveState("Neutral");
    }

    const triggerSelfReport = () => {
        setActiveState("SelfReport");
    }

    const reportEmotion = (emotion) => {
        console.log("reported emotion: " + emotion);
        setActiveState("Confirmation");
    }

    if (activeState === "Neutral"){
        return(<Neutral data-testid={"state-Neutral"} triggerSelfReport={triggerSelfReport}/>);
    } else if (activeState === "SelfReport"){
        return(<SelfReport data-testid={"state-SelfReport"} reportEmotion={reportEmotion} cancelAction={triggerNeutral}/>);
    } else if (activeState === "Confirmation"){
        return(<Confirmation data-testid={"state-Confirmation"}/>);
    } else {
        throw new Error("state not recognized");
    }
}