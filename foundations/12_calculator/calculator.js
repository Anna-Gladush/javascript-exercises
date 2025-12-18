const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr === undefined || arr.length === 0) {return 0;}
	return arr.reduce((total, current) => total + current);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current)
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let result = 1;
  if (a === 0 || a === 1) {return 1}
	for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
