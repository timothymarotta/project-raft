import {AffectPair} from '../main/AffectPair';
import '../App.css';

import angry from '../assets/angry.png';
import bored from '../assets/bored.png';
import confused from '../assets/confused.png';
import surprised from '../assets/surprise.png';
import close from '../assets/close.png';

// props needs to include reportEmotion
    // function that takes a string that represents and emotion
    // post-condition: component is moved to confirmation state
// props needs to include cancelAction
    //function takes no parameters
    //post-condition: state is changed
export const SelfReport = props => {


    return(
        <div className={"selfReport"}>
            <AffectPair data-testid={"angry"} emotion={"angry"} image={angry} reportEmotion={props.reportEmotion}/>
            <AffectPair emotion={"bored"} image={bored} reportEmotion={props.reportEmotion}/>
            <AffectPair emotion={"confused"} image={confused} reportEmotion={props.reportEmotion}/>
            <AffectPair emotion={"surprised"} image={surprised} reportEmotion={props.reportEmotion}/>
            <button data-testid={"cancelButton"} className={"closeButton"} onClick={props.cancelAction}>
                <img className={"closeButtonImage"} src={close} alt={"Close"}/>
            </button>
        </div>
    )
}