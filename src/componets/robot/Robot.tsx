import React from 'react';
import { FaRobot } from 'react-icons/fa';
import { RobotProps } from '../../utils/interfaces';

const Robot: React.FC<RobotProps> = ({ direction }) => {

    const directionStyles: Record<string, React.CSSProperties> = {
        N: { transform: 'rotate(0deg)' },
        E: { transform: 'rotate(90deg)' },
        S: { transform: 'rotate(180deg)' },
        W: { transform: 'rotate(270deg)' },
    };

    return (
        <div className="robot" style={directionStyles[direction]}>
            <FaRobot size={24} />
        </div>
    );
};

export default Robot;
