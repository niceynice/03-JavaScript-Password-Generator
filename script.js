// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare character variables
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
var numberCharacters = ['0', '1', '2', '3', '4']
var specialCharacters = ['!', '@', '#', '$']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// determine what kind of password user wants
function generatePassword() {
  var passwordLength = parseInt (prompt("How many characters would you like your password to be? Please enter a number between 8 and 128."));
    if (passwordLength > 7 || passwordLength < 129) {
      alert("You will now be asked which kinds of characters you would like included in your password. Please select at least 1 of the 4 choices.")
      var containsLowercase = confirm ("Would you like lowercase characters?")
      var containsUppercase = confirm ("Would you like uppercase characters?")
      var containsNumbers = confirm ("Would you like numerical characters?")
      var containsSpecial = confirm ("How about special characters?")

      var result = []
      var potentialChars = []
      
      if (containsLowercase) {
        potentialChars = potentialChars.concat(lowercaseCharacters)
      }
      if (containsUppercase) {
        potentialChars = potentialChars.concat(uppercaseCharacters)
      }
      if (containsNumbers) {
        potentialChars = potentialChars.concat(numberCharacters)
      }
      if (containsSpecial) {
        potentialChars = potentialChars.concat(specialCharacters)
      }
      var randomArray = shuffle(potentialChars)
      console.log (randomArray)

      for (var i = 0; i < passwordLength; i++) {
        result.push(randomArray[i])
      }
      console.log (result.join(""))
      return result.join("")
    }
    // else (passwordLength < 8 || passwordLength > 128) {
    //   alert("Please follow directions.")
    // }
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
