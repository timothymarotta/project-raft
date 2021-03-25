import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {AffectPair} from '../main/AffectPair';
import {testImage} from '../assets/neutral-icon.png';

describe('Affect Pair', () => {
    test('test button', () => {
        const mockTriggerConfirmation = jest.fn();

        render(<AffectPair emotion={"Stressed"} image={testImage} triggerConfirmation={mockTriggerConfirmation}/>);
        screen.debug();
        expect(screen.getByRole('button')).toBeEnabled();

        userEvent.click(screen.getByRole("button"));
        expect(mockTriggerConfirmation).toBeCalledTimes(1);
        expect(screen.getByRole("button")).toBeEnabled();

        expect(screen.getByRole('button').innerText === "Stressed");
    })

    test('test image', () => {
        const mockTriggerConfirmation = jest.fn();

        render(<AffectPair emotion={"Stressed"} image={testImage} triggerConfirmation={mockTriggerConfirmation}/>);
        screen.debug();

        expect(screen.getAllByRole('img').length).toBe(1);
    })
})