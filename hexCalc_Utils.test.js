import { isValidHex } from './hexCalc_Utils';

test('Accepts valid 2-digit hex', () => {
  expect(isValidHex('1A')).toBe(true);
});

test('Converts lowercase to uppercase and accepts', () => {
  expect(isValidHex('a3')).toBe(true);
});

test('Rejects invalid characters', () => {
  expect(isValidHex('G7')).toBe(false);
});

test('Rejects inputs longer than 2 digits', () => {
  expect(isValidHex('123')).toBe(false);
});

import { addHex } from './hexCalc_Utils';

test('Adds with carry over', () => {
    expect(addHex('FF', '01')).toBe('0100');
  });

test('Adds small hex numbers', () => {
    expect(addHex('01', '0A')).toBe('000B');
});

import { subtractHex } from './hexCalc_Utils';

test('Subtracts and returns positive result', () => {
expect(subtractHex('1A', '0A')).toBe('0010');
});

test('Returns 0 for negative result', () => {
expect(subtractHex('0A', '1A')).toBe('0000');
});
  

import { multiplyHex } from './hexCalc_Utils';

test('Multiplies hex numbers', () => {
    expect(multiplyHex('0A', '02')).toBe('0014');
  });
  
import { divideHex } from './hexCalc_Utils';

  test('Divides and rounds down', () => {
    expect(divideHex('1F', '03')).toBe('000A');
  });
  
  test('Division by zero throws error', () => {
    expect(() => divideHex('1A', '00')).toThrow("Division by zero");
  });
  