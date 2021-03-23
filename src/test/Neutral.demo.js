import React from 'react';
import '../App.css';

import {Neutral} from '../main/Neutral';

const buttonClicked = () => {
    console.log("Neutral Button was clicked");
}

export const NeutralDemo = props => {
    return(
        <Neutral triggerSelfReport={buttonClicked}/>
    )
}