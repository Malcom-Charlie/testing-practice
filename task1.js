exports.stringLength = (str) => {
  if (str.length < 1) {
    throw new Error('String should not be Empty');
  }
  if (str.length > 10) {
    throw new Error('String should be less than 10 characters');
  }
  return str.length;
}