import '../App.css';

export const AffectPair = props => {

    const buttonClicked = (e) => {
        props.reportEmotion(props.emotion);
    }

    return (
        <div className={"affectContainer"}>
            
            
            <button className={"affectButton"} onClick={buttonClicked}>
                <img className={"affectButtonImage"} src={props.image} alt={props.emotion}/>
            </button>
            <p className={"affectText"}>I'm feeling {props.emotion}</p>
        </div>
    )
}