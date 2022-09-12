import {
    division
} from './division';

describe('division', function() {
    test('positive', () => {
        expect(division(5, 5)).toBe(1);
    });

    test('positive', () => {
        expect(division(500, 5)).toBe(100);
    });
});