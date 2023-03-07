const { capitalize } = require('./task4');

describe('capitalize', () => {
  it('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
    expect(capitalize('hELLO')).toBe('HELLO');
  });
});
