const convertToCelsius = function(f) {
      let celsius = f - 32;
      celsius *= 5/9

      let rounding = (Math.round(celsius * 10))/ 10
      return(rounding)
};

const convertToFahrenheit = function(c) {
      let fahrenheit = c * (9/5);
      fahrenheit += 32;

      let rounding = (Math.round(fahrenheit * 10))/ 10
      return(rounding)

};

convertToFahrenheit(37.7777777777);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
