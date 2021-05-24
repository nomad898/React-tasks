import { Calculator } from '../containers/Calculator';
test('Properly adds tow numbers', () => {
    const calculator = new Calculator();
    expect(calculator.sum(1, 2)).toBe(3);
});