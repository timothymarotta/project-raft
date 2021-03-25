import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {testImage} from '../assets/neutral-icon.png';
import {SelfReport} from '../main/SelfReport';

describe('Self Report', () => {
    test('check pairs', () => {
        const mockTriggerConfirmation = jest.fn();
        const mockTriggerNeutral = jest.fn();

        render(<SelfReport triggerConfirmation={mockTriggerConfirmation}/>);
        screen.debug();
        expect(screen.getAllByRole('button')).toBeEnabled();
        expect(screen.getAllByRole('button').length).toBe(6);

        //how to test presence of custom components?

        userEvent.click(screen.getByTestId("cancelButton"));
        expect(mockTriggerNeutral).toBeCalledTimes(1);
        expect(screen.getByTestId("cancelButton")).toBeEnabled();
    })
})