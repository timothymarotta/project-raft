import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Neutral} from "../main/Neutral"

describe('Neutral State', () => {
    test('check button', () => {
        
        render(<Neutral/>);
        screen.debug();
        expect(screen.getByRole("button")).toBeEnabled();
        expect(screen.getAllByRole("button").length).toBe(1);

        userEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("button").onclick).toBeCalled();
        expect(screen.getByRole("button")).toBeEnabled();

    });
});