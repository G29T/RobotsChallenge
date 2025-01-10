import React, { useState, useEffect } from 'react';
import Grid from './componets/grid/Grid';
import InputCommands from './componets/input-commands/InputCommands';
import { CardinalDirection, Command, turnLeft, turnRight, moveForward } from './utils/robotUtils'; 
import './App.css';
import './index.css';

const gridSize = 5;

const App: React.FC = () => {
  const [robotCoordinates, setRobotCoordinates] = useState({ x: 0, y: 0 });
  const [robotCardinalDirection, setRobotCardinalDirection] = useState<CardinalDirection>('E');
  const [commands, setCommands] = useState<string>('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (isMoving && currentCommandIndex < commands.length) {
      const command = commands[currentCommandIndex] as Command;
      const timer = setTimeout(() => {
        executeCommand(command);
        setCurrentCommandIndex((prev) => prev + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (currentCommandIndex >= commands.length) {
      setIsMoving(false);
    }
  }, [isMoving, currentCommandIndex, commands]);

  const executeCommand = (command: Command) => {
    if (command === 'L') {
      setRobotCardinalDirection((prevDirection) => turnLeft(prevDirection));
    } else if (command === 'R') {
      setRobotCardinalDirection((prevDirection) => turnRight(prevDirection));
    } else if (command === 'F') {
      setRobotCoordinates((prevPosition) => moveForward(prevPosition, robotCardinalDirection, gridSize));
    }
  };

  const initialiseRobot = () => {
    if (!commands) return;

    setCurrentCommandIndex(0); 
    setIsMoving(true);
  };

  return (
    <div className="App p-6">
        <h1 className="text-2xl font-bold mb-5 text-center">Robots Challenge</h1>
        <div className="flex flex-col gap-10 items-center">
          <InputCommands
            commands={commands}
            setCommands={setCommands}
            isMoving={isMoving}
            initialiseRobot={initialiseRobot}
          />
          <Grid
            gridSize={gridSize}
            robotCoordinates={robotCoordinates}
            robotCardinalDirection={robotCardinalDirection}
          />
        </div>
    </div>
  );
};

export default App;
