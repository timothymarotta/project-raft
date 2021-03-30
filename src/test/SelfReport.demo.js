import React from 'react';
import '../App.css';

import {SelfReport} from '../main/SelfReport';

export const SelfReportDemo = (props) => {
    return(
        <SelfReport reportEmotion={(emotion) => console.log("emotion: " + emotion)} cancelAction={() => console.log("Cancel Action triggered")}/>
    )
}