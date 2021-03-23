import feedback from "../assets/neutral-icon.png";
import '../App.css';

export const Neutral = props => {

    const buttonClicked = (e) => {
        props.triggerSelfReport();
    }

    return(
        <div>
            <button className={"neutralButton"} onClick={buttonClicked}>
                <img src={feedback} alt={"Report Your Emotion"}></img>
            </button>
        </div>
    );
}