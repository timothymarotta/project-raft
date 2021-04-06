import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StateController } from '../main/StateController';

describe('State Controller', () => {
    test('render individual states', () => {
        //test neutral state
        render(<StateController state={"neutral"}/>);
        screen.debug();
        expect(screen.getByRole("Neutral"));

        //test self report state
        render(<StateController state={"selfReport"}/>);
        screen.debug();
        expect(screen.getByRole("SelfReport"));

        //test confirmation state
        render(<StateController state={"confirmation"}/>);
        screen.debug();
        expect(screen.getByRole("Confirmation"));
    })

    test('integration test', () => {
        render(<StateController state={"neutral"}/>);
        screen.debug();
        expect(screen.getByRole("Neutral"));

        userEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("SelfReport"));

        userEvent.click(screen.getByTestId("angry"));
        expect(screen.getByRole("Confirmation"));
    })
})