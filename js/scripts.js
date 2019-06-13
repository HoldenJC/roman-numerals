var userNumber;
var romanNumeral = "";

var symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var symbolValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var converter = function(input) {
  if (input > 3999) {
    romanNumeral = "Please enter a number less than 4,000";
  } else {
    for (var i = 0; i < symbolValues.length; i++){
      if (input >= symbolValues[i]) {
        numeralDuplicator(Math.floor(input/symbolValues[i]), symbolValues[i]);
        input = input-(Math.floor(input/symbolValues[i])*symbolValues[i]);
      }
    }
  }
}

var numeralDuplicator = function(multiplier, index){
  for (var i = 0; i < multiplier; i++){
    romanNumeral += symbols[symbolValues.indexOf(index)];
  }
}

$(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();
    romanNumeral = "";

    userNumber = parseInt($("#userInput").val());
    converter(userNumber);

    $("#result").empty().append(romanNumeral);
  });
});
