const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

test('returnTwo should return the number 2', () => {
    expect(returnTwo()).toBe(2);
});

test('greeting should return a string with the name input', () => {
    expect(greeting('James')).toEqual(`Hello, James.`);
    expect(greeting('Jill')).toEqual(`Hello, Jill.`);
});

test('add should add the two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
});



describe('math functions', () => {
    test('add should add the two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(5, 9)).toBe(14);
    });

    test('multiply should multiply the two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(4, 5)).toBe(20);
    });

    test('divide should divide the two numbers', () => {
        expect(divide(10, 5)).toBe(2);
        expect(divide(12, 2)).toBe(6);
    });

    test('subtract should subtract the two numbers', () => {
        expect(subtract(14, 9)).toBe(5);
        expect(subtract(10, 3)).toBe(7);
    });
});

// If more arguements are sent in than there are parameters, the tests till passes, 