// Sort Numbers...
exports.Ascend = (a, b) => {
  return a - b;
};

exports.Descend = (a, b) => {
  return b - a;
};

exports.largestNumber = arr => {
  return Math.max.apply(null, arr);
};

exports.smallestNumber = arr => {
  return Math.min.apply(null, arr);
};
