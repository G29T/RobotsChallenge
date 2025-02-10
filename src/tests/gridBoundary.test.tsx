// import { moveForward, turnLeft, turnRight } from '../utils/robotUtils';

// describe('Grid boundary and movement checks', () => {
//     const gridSize = 5;

//     describe('moveForward', () => {
//         test('Robot moves north within grid boundaries', () => {
//             const initialPosition = { x: 2, y: 3 };
//             const newPosition = moveForward(initialPosition, 'N', gridSize);
//             expect(newPosition).toEqual({ x: 2, y: 4 });
//         });

//         test('Robot moves east within grid boundaries', () => {
//             const initialPosition = { x: 3, y: 2 };
//             const newPosition = moveForward(initialPosition, 'E', gridSize);
//             expect(newPosition).toEqual({ x: 4, y: 2 });
//         });

//         test('Robot moves south within grid boundaries', () => {
//             const initialPosition = { x: 2, y: 3 };
//             const newPosition = moveForward(initialPosition, 'S', gridSize);
//             expect(newPosition).toEqual({ x: 2, y: 2 }); 
//         });

//         test('Robot moves west within grid boundaries', () => {
//             const initialPosition = { x: 3, y: 2 };
//             const newPosition = moveForward(initialPosition, 'W', gridSize);
//             expect(newPosition).toEqual({ x: 2, y: 2 }); 
//         });

//         test('Robot does not exceed boundaries when moving north', () => {
//             const initialPosition = { x: 2, y: 4 };
//             const newPosition = moveForward(initialPosition, 'N', gridSize);
//             expect(newPosition).toEqual({ x: 2, y: 4 }); 
//         });

//         test('Robot does not exceed boundaries when moving east', () => {
//             const initialPosition = { x: 4, y: 2 }; 
//             const newPosition = moveForward(initialPosition, 'E', gridSize);
//             expect(newPosition).toEqual({ x: 4, y: 2 }); 
//         });

//         test('Robot does not exceed boundaries when moving south', () => {
//             const initialPosition = { x: 2, y: 0 }; 
//             const newPosition = moveForward(initialPosition, 'S', gridSize);
//             expect(newPosition).toEqual({ x: 2, y: 0 });
//         });

//         test('Robot does not exceed boundaries when moving west', () => {
//             const initialPosition = { x: 0, y: 2 }; 
//             const newPosition = moveForward(initialPosition, 'W', gridSize);
//             expect(newPosition).toEqual({ x: 0, y: 2 }); 
//         });
//     });
// });
