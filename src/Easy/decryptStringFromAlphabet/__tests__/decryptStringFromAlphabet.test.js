const fn = require('../decryptStringFromAlphabet');

describe('Decrypt String from Alphabet', () => {
  test('It should exist', () => {
    expect(fn).toBeTruthy();
  });

  test('Should correctly decrypt an obfuscated string', () => {
    const testcase1 = '10#11#12';
    const testcase2 = '1326#';
    const testcase3 = '26#';

    expect(fn(testcase1)).toBe('jkab');
    expect(fn(testcase2)).toBe('acz');
    expect(fn(testcase3)).toBe('z');
  });
});
