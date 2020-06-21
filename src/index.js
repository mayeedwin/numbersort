// Acsend...
exports.Ascend = (a, b) => {
  return a - b;
};
// Descend...
exports.Descend = (a, b) => {
  return b - a;
};
// Largest number...
exports.largestNumber = arr => {
  return Math.max.apply(null, arr);
};
// Smallest number...
exports.smallestNumber = arr => {
  return Math.min.apply(null, arr);
};
