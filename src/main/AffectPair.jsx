export const AffectPair = props => {

    const buttonClicked = (e) => {
        props.triggerConfirmation(props.emotion);
    }

    return (
        <div>
            <p>I'm feeling {props.emotion}</p>
            <button onClick={buttonClicked}>
                <img src={props.image} alt={props.emotion}/>
            </button>
        </div>
    )
}