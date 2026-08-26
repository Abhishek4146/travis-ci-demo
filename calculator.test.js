const { add, subtract, multiply } = require('./calculator');

test('addition should work', () => {
    expect(add(10, 5)).toBe(15);
});

test('subtraction should work', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('multiplication should work', () => {
    expect(multiply(10, 5)).toBe(50);
});
