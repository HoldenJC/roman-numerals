var userNumber;
var romanNumeral = "";

var symbols = ["M", "D", "C", "L", "X", "V", "I"];
var symbolValues = [1000, 500, 100, 50, 10, 5, 1];

var numeralDuplicator = function(multiplier, index){
  for (var i = 0; i < multiplier; i++){
    romanNumeral += symbols[symbolValues.indexOf(index)];
  }
}

var converter = function(input) {
  // debugger;
  if (input > 3999) {
    return "Please enter a number less than 4,000";
  } else {
    for (var i = 0; i < symbolValues.length; i++){
      if (input === symbolValues[i]) {            // input: 10, output: X
        romanNumeral = symbols[i];
        break;
      } else if (input % symbolValues[i] === 0){
        numeralDuplicator((input/symbolValues[i]), symbolValues[i]);
        break;
      }
    }
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
