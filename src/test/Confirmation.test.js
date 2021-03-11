import {render, screen} from '@testing-library/react';

import {Confirmation} from "../main/Confirmation"

describe('Confirmation', () => {
    test('check text', () => {
        render(<Confirmation/>);
        screen.debug();

        //check that only one line of text exists
        expect(screen.getAllByRole("p").length).toBe(1);
        expect(screen.getByText("Thanks for your feedback")).toBeInTheDocument();
    });
});