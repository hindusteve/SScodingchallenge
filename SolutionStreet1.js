var base_string = "" // variable to store input
var stringArray = [] // empty stringArray

// defining a function to count the frequency of each unique character, accepts an argument of an array from the input string
function characterCount(charArray) {

  var outputArray = []; // array to contain unique characters
  var currentChar = ""; 

  for (var i=0; i < charArray.length; i++) {
    //currentChar = charArray[i];
    if (charArray[i] !== " ") { // check for spaces
      if (outputArray.indexOf(charArray[i]) === -1) { // check if current charactaer already exists in output array
        outputArray.push(charArray[i]);
      }
    } else { // add spaces to output array no matter what
        outputArray.push(charArray[i]);    
    }
  }
  return outputArray.join("");
}

base_string = prompt("Please enter a string for which the duplicate characters should be removed");
stringArray = base_string.split("");
console.log(characterCount(stringArray))
