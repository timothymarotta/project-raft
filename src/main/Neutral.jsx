export const Neutral = props => {

    const buttonClicked = (e) => {
        props.triggerSelfReport();
    }

    return(
        <div>
            <button onClick={buttonClicked}>
                <img src="../assets/neutral-icon.png"></img>
            </button>
        </div>
    );
}