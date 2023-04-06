const convertToCelsius = function(numb) {
  cels = (numb - 32) * (5/9);
  return Math.round(cels * 10) / 10;
};

const convertToFahrenheit = function(numb) {
  fahren = numb * 1.8 + 32;
  return Math.round(fahren * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
