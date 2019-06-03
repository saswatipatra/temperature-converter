var celsius;

var fahrenheit = function(celsius)
{
  var result = ((celsius*(9/5))+32) ;
  return result;
  };



var celsius = parseFloat(prompt("Enter the temperature in Celsius (C):"));

alert("Temperature in Fahrenheit is : " + fahrenheit(celsius));
