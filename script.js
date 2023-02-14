// Variable for an array of Upper Case Letters
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//Variable for an array of Lower Case Letters
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Variable for an array of Numbers
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Variable for an array of Special Characters
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var character = [];
var passwordLength = 0;

function passwordInput() {

  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );
  passwordLength = length;


  // variable with a confirm method for special characters
  var containsSpecialCharacters = confirm(
    'Click OK to confirm including special characters.');
  // variable with a confirm method for uppercase characters
  var containsUppercaseCharacters = confirm('Click OK to confirm including uppercase characters.');
  // variable with a confirm method for lowercase characters
  var containsLowercaseCharacters = confirm('Click OK to confirm including lowercase characters.');
  // variable with a confirm method for numbers
  var containsNumbers = confirm('Click OK to confirm including numbers.');


  if (containsSpecialCharacters === false && containsLowercaseCharacters === false && containsUppercaseCharacters === false && containsNumbers === false) {
    alert("Cannot proceed with password creation.")
  }
  if (containsSpecialCharacters === true) {
    character = character.concat(specialCharacters)
  }
  if (containsLowercaseCharacters === true) {
    character = character.concat(lowercaseCharacters)
  }
  if (containsUppercaseCharacters === true) {
    character = character.concat(uppercaseCharacters)
  }
  if (containsNumbers === true) {
    character = character.concat(numbers)
  }

  character = character.join("");
  console.log(character, "this is character")
}




var generateBtn = document.querySelector("#generate");


function writePassword() {
  passwordInput();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}


function generatePassword() {
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * character.length);
    console.log(character)
    password += character.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
  character = [];
}


generateBtn.addEventListener("click", writePassword);
