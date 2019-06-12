var userNumber;
var romanNumeral = "";

var symbols = ["M", "D", "C", "L", "X", "V", "I"];
var symbolValues = [1000, 500, 100, 50, 10, 5, 1];

var numeralDuplicator = function(multiplier, index){
  for (var i = 0; i < multiplier; i++){
    romanNumeral += symbols[symbolValues.indexOf(index)];
  }
}

var numeralSubtractor = function(index){
  var tempNumeral = symbols[symbolValues.indexOf(index)];
  romanNumeral = tempNumeral + romanNumeral;
}

var converter = function(input) {
  debugger;
  if (input > 3999) {
    return "Please enter a number less than 4,000";
  } else {
    for (var i = 0; i < symbolValues.length; i++){
      if (input === symbolValues[i]) {            // input: 10, output: X
        romanNumeral += symbols[i];
        break;
      } else if (input % symbolValues[i] === 0){      // input: 20, output: XX
        numeralDuplicator((input/symbolValues[i]), symbolValues[i]);
        break;
      } else if (input > symbolValues[i]) {       // input: 21, output: XXI
        numeralDuplicator(Math.floor(input/symbolValues[i]), symbolValues[i]);
        input = input-(Math.floor(input/symbolValues[i])*symbolValues[i]);
      // } else if (symbolValues[i] === input+1 || symbolValues[i] === input - 4) {     // detects 4's and 9's (e.g., 5 === 4+1)
      //   romanNumeral = romanNumeral + symbols[i+1] + symbols[i];
      //   break;
        // numeralDuplicator(1, symbolValues[i]);
        // input = input - symbolValues[i];
      } else if (input < 0){
        numeralSubtractor(symbolValues[i]);
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
