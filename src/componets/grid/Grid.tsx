import React from 'react';
import Robot from '../robot/Robot';
import { GridProps } from '../../utils/interfaces'; 

const Grid: React.FC<GridProps> = ({ gridSize, robotCoordinates, robotCardinalDirection }) => {
    const renderGrid = () => {
        return Array.from({ length: gridSize * gridSize }).map((_, index) => {
            const x = index % gridSize;
            const y = gridSize - 1 - Math.floor(index / gridSize);
            const isRobot = x === robotCoordinates.x && y === robotCoordinates.y;

            return (
                <div
                    key={index}
                    className={`w-16 h-16 flex items-center justify-center border ${isRobot ? 'bg-blue-500 text-white' : 'bg-gray-200'} sm:w-12 sm:h-12 md:w-16 md:h-16`}
                >
                    {isRobot ? <Robot direction={robotCardinalDirection} /> : ''}
                </div>
            );
        });
    };

    return (
        <div className={`grid gap-1 border border-gray-400`} style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
            {renderGrid()}
        </div>
    );
};

export default Grid;
