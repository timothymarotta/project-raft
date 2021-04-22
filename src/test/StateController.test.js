import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StateController } from '../main/StateController';

describe('State Controller', () => {
    test('render individual states', () => {
        //test neutral state
        render(<StateController initState={"Neutral"}/>);
        screen.debug();
        expect(screen.getByTestId("state-Neutral")).toBe(true);

        //test self report state
        render(<StateController initState={"selfReport"}/>);
        screen.debug();
        expect(screen.getByTestId("state-SelfReport")).toBe(true);

        //test confirmation state
        render(<StateController initState={"confirmation"}/>);
        screen.debug();
        expect(screen.getByTestId("state-Confirmation")).toBe(true);
    })

    test('integration test', () => {
        render(<StateController initState={"Neutral"}/>);
        screen.debug();
        expect(screen.getByTestId("state-Neutral")).toBe(true);

        userEvent.click(screen.getByRole("button"));
        expect(screen.getByTestId("state-SelfReport")).toBe(true);

        userEvent.click(screen.getByTestId("angry"));
        expect(screen.getByTestId("state-Confirmation")).toBe(true);
    })
})