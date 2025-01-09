import React from 'react';
import { InputCommandsProps } from '../../utils/interfaces'; 

const InputCommands: React.FC<InputCommandsProps> = ({ commands, setCommands, isMoving, initialiseRobot }) => {
    return (
        <div className="w-full max-w-lg px-4">
            <label htmlFor="commands" className="block text-lg font-semibold mb-2">
                Enter Commands R, L or F:
            </label>
            <input
                id="commands"
                type="text"
                className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={commands}
                onChange={(e) => setCommands(e.target.value.toUpperCase().replace(/[^RLF]/g, ''))}
                placeholder="Example: RFRFRFRFL"
            />
            <button
                onClick={initialiseRobot}
                className={`bg-blue-500 text-white px-4 py-2 rounded transition-all duration-200 hover:bg-blue-600 ${isMoving || !commands ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isMoving || !commands}
            >
                Start Simulation
            </button>
        </div>
    );
};

export default InputCommands;
