export type CardinalDirection = 'N' | 'E' | 'S' | 'W';
export type Command = 'L' | 'R' | 'F';

export const cardinalDirections: CardinalDirection[] = ['N', 'E', 'S', 'W'];

export const turnLeft = (currentCardinalDirection: CardinalDirection): CardinalDirection => {
    const currentIndex = cardinalDirections.indexOf(currentCardinalDirection);
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = cardinalDirections.length - 1; 
    }
    return cardinalDirections[newIndex];
};

export const turnRight = (currentCardinalDirection: CardinalDirection): CardinalDirection => {
    const currentIndex = cardinalDirections.indexOf(currentCardinalDirection);
    let newIndex = currentIndex + 1;
    if (newIndex >= cardinalDirections.length) {
        newIndex = 0; 
    }
    return cardinalDirections[newIndex];
};

export const moveForward = (position: { x: number; y: number }, CardinalDirection: CardinalDirection, gridSize: number): { x: number; y: number } => {
    let newX = position.x;
    let newY = position.y;

    switch (CardinalDirection) {
        case 'N':
        newY = Math.min(position.y + 1, gridSize - 1);
        break;
        case 'E':
        newX = Math.min(position.x + 1, gridSize - 1);
        break;
        case 'S':
        newY = Math.max(position.y - 1, 0);
        break;
        case 'W':
        newX = Math.max(position.x - 1, 0);
        break;
    }

    return { x: newX, y: newY };
};
