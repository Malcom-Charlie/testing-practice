const { stringLength } = require('./task1');

test('throws an error if string is empty', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String should not be Empty');
});

test('throws error if the string is long', () => {
  expect(() => {
    stringLength('this string is too long');
  }).toThrow('String should be less than 10 characters');
});