var userNumber;
var romanNumeral;

var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var symbolValues = [1, 5, 10, 50, 100, 500, 1000];

var converter = function(number) {
  if (number > 3999) {
    return "Please enter a number less than 4,000"
  } else {
    symbolValues.forEach(function(value) {
      if (number === value) {
        romanNumeral = symbols[symbolValues.indexOf(value)];
      }
    })
  }
}


$(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();

    userNumber = parseInt($("#userInput").val());
    converter(userNumber);

    $("#result").empty().append(romanNumeral);
  });
});
