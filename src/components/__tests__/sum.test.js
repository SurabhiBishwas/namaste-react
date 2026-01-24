import { sum } from '../sum';
test('sum should return the sum of two numbers', () => {
    const res = sum(2, 9);
    expect(res).toBe(11);
})