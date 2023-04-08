const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	if (array.length == 0) {return 0}
  return array.reduce((total, num) => {return total + num}); 
};

const multiply = function(array) {
  return array.reduce((total, num) => {return total * num});
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num == 0) {return 1};
  let num2 = 1;
  for (i = num; i > 0; i--) {
    num2 = num2 * i;
  }
  return num2;
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
