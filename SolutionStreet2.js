var input1 = "AABBCDD";       //variable for 1st sample input
var input2 = "AABBCCDEEFF";   // variable for 2nd sample input       


// function to iterate through string and compare pairs of characters to output first instance of a non-repeating character 
function outputUnique(inputString) {

  var stringArray = inputString.split("");

  for (var i = 0; i < inputString.length; i+=2) {
    if (inputString[i] !== inputString[i+1]) {
      if(inputString[i + 1] === inputString[i +2]){
        return inputString[i];
      }
      else {
        return inputString[i+1];
      }
    }
  }


}


//run function with both sample inputString
console.log(outputUnique(input1));
console.log(outputUnique(input2));