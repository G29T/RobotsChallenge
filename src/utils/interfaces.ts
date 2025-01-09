export interface RobotProps {
    direction: string;
}

export interface GridProps {
    gridSize: number;
    robotCoordinates: { x: number; y: number };
    robotCardinalDirection: string;
}
  
export interface InputCommandsProps {
    commands: string;
    setCommands: React.Dispatch<React.SetStateAction<string>>;
    isMoving: boolean;
    initialiseRobot: () => void;
}
