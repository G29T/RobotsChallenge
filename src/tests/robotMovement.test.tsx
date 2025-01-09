import { turnLeft, turnRight } from '../utils/robotUtils';

describe('Robot movement checks', () => {
    const gridSize = 5;

    describe('turnRight', () => {
        test('Robot turns right from north to east', () => {
            expect(turnRight('N')).toBe('E');
        });

        test('Robot turns right from east to south', () => {
            expect(turnRight('E')).toBe('S');
        });

        test('Robot turns right from south to west', () => {
            expect(turnRight('S')).toBe('W');
        });

        test('Robot turns right from west to north', () => {
            expect(turnRight('W')).toBe('N');
        });
    });

    describe('turnLeft', () => {
        test('Robot turns left from north to west', () => {
            expect(turnLeft('N')).toBe('W');
        });

        test('Robot turns left from west to south', () => {
            expect(turnLeft('W')).toBe('S');
        });

        test('Robot turns left from south to east', () => {
            expect(turnLeft('S')).toBe('E');
        });

        test('Robot turns left from east to north', () => {
            expect(turnLeft('E')).toBe('N');
        });
    });
});
