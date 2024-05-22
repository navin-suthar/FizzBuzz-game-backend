const { fizzBuzz } = require('../index');

describe('fizzBuzz', () => {
  test('returns FizzBuzz for multiples of 3 and 5', () => {
    const value = 15;
    const expected = { result: 'FizzBuzz', divisions: [] };
    expect(fizzBuzz(value)).toEqual(expected);
  });

  test('returns Fizz for multiples of 3', () => {
    const value = 9;
    const expected = { result: 'Fizz', divisions: ['Divided 9 by 5'] };
    expect(fizzBuzz(value)).toEqual(expected);
  });

  test('returns Buzz for multiples of 5', () => {
    const value = 20;
    const expected = { result: 'Buzz', divisions: ['Divided 20 by 3'] };
    expect(fizzBuzz(value)).toEqual(expected);
  });

  test('returns the number for non-multiples of 3 and 5', () => {
    const value = 7;
    const expected = { result: '', divisions: ['Divided 7 by 3', 'Divided 7 by 5'] };
    expect(fizzBuzz(value)).toEqual(expected);
  });

  test('returns Invalid item for non-numeric input', () => {
    const value = 'foo';
    const expected = { result: 'Invalid item', divisions: [] };
    expect(fizzBuzz(value)).toEqual(expected);
  });
});