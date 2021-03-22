import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Neutral} from "../main/Neutral"

describe('Neutral State', () => {
    test('check button', () => {
        const mockTriggerSelfReport = jest.fn();
        
        render(<Neutral triggerSelfReport={mockTriggerSelfReport}/>);
        screen.debug();
        expect(screen.getByRole("button")).toBeEnabled();

        userEvent.click(screen.getByRole("button"));
        expect(mockTriggerSelfReport).toBeCalledTimes(1);
        expect(screen.getByRole("button")).toBeEnabled();

    });
});