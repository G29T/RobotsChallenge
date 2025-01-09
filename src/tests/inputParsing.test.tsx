import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputCommands from '../componets/input-commands/InputCommands'; 
import { InputCommandsProps } from '../utils/interfaces';

describe('test the input component', () => {
    let setCommandsMock: jest.Mock;
    let initialiseRobotMock: jest.Mock;

    beforeEach(() => {
        setCommandsMock = jest.fn();
        initialiseRobotMock = jest.fn();
    });

    test('displays input field and start simulation button', () => {
        const props: InputCommandsProps = {
            commands: '',
            setCommands: setCommandsMock,
            isMoving: false,
            initialiseRobot: initialiseRobotMock,
        };

        render(<InputCommands {...props} />);
        
        expect(screen.getByLabelText(/Enter Commands R, L or F:/i)).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent(/Start Simulation/i);
    });

    test('calls setCommands with updated commands', () => {
        const props: InputCommandsProps = {
            commands: '',
            setCommands: setCommandsMock,
            isMoving: false,
            initialiseRobot: initialiseRobotMock,
        };
    
        render(<InputCommands {...props} />);
    
        const input = screen.getByPlaceholderText(/Example: RFRFRFRFL/i);
        fireEvent.change(input, { target: { value: 'LRF' } });
    
        expect(setCommandsMock).toHaveBeenCalledTimes(1);
        expect(setCommandsMock).toHaveBeenCalledWith('LRF');
    });    

    test('removes invalid characters from commands', () => {
        const props: InputCommandsProps = {
            commands: '',
            setCommands: setCommandsMock,
            isMoving: false,
            initialiseRobot: initialiseRobotMock,
        };
    
        render(<InputCommands {...props} />);
    
        const input = screen.getByPlaceholderText(/Example: RFRFRFRFL/i);
        fireEvent.change(input, { target: { value: 'FLR123XYZ' } });
    
        expect(setCommandsMock).toHaveBeenCalledTimes(1);
        expect(setCommandsMock).toHaveBeenCalledWith('FLR');
    });    
});
