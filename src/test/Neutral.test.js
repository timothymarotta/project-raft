import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Neutral} from "../main/Neutral"

const testOnClick = () => {
    console.log("button was clicked.");
}

describe('Neutral State', () => {
    test('check button', () => {
        
        render(<Neutral triggerSelfReport={testOnClick}/>);
        screen.debug();
        expect(screen.getByRole("button")).toBeEnabled();

        userEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("button").onclick).toBeCalled();
        expect(screen.getByRole("button")).toBeEnabled();

    });
});