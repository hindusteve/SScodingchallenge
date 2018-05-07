var base_string = "" // variable to store input
var target_string = "" // variable for output string, where duplicate characters are removed
var stringArray = [] // empty stringArray

// defining a function to count the frequency of each unique character, accepts an argument of an array from the input string
function characterCount(charArray) {
	
	var outputArray = []; // array to contain unique characters
	var currentChar = ""; 

	for (var i=0; i < charArray.length; i++) {
		currentChar = charArray[i];
		if (outputArray.indexOf(currentChar) === -1) {
			outputArray.push(charArray[i]);
		}
	}
	return outputArray.join("");
}


base_string = "tree traversal";
stringArray = base_string.split("");
characterCount(stringArray);
