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


// Next create a function that allows you to write the code needed to present your users with the prompts for the length of the password and characters they would like to use

function passwordInput() {

  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // if (length) {
  //   window.alert("Numbers Only!")
  // } else if (length < 8) {
  //   window.alert("Password has to include atleats 8 characters!")
  // } else (length > 128) {
  //   window.alert("Password cannot exceed 128 characters!")
  // }

  // variable with a confirm method for special characters
  var containsSpecialCharacters = confirm(
    'Click OK to confirm including special characters.');
  // variable with a confirm method for uppercase characters
  var containsUppercaseCharacters = confirm('Click OK to confirm including uppercase characters.');
  // variable with a confirm method for lowercase characters
  var containsLowercaseCharacters = confirm('Click OK to confirm including lowercase characters.');
  // variable with a confirm method for numbers
  var containsNumbers = confirm('Click OK to confirm including numbers.');


  if (false) {
    alert("Cannot proceed with password creation.")
  }


  var userSelectedOptions = {
    length: length,
    // created key:value pair for special characters
    containsSpecialCharacters: containsSpecialCharacters,
    // created key:value pair for uppercase
    containsUppercaseCharacters: containsUppercaseCharacters,
    // created key:value pair for lowercase
    containsLowercaseCharacters: containsLowercaseCharacters,
    // created key:value pair for numbers
    containsNumbers: containsNumbers
  };
  return userSelectedOptions;


  generatePassword();

}
passwordInput();

















// questions()
// var question1 = confirm("Would you like numbers?");
// var question2 = confirm("Would you like special characters?");



// function questions() {
//   // if 1 and 2 are true it populates a random password
//   if (question1 && question2) {
//     writePassword()
//     // if 1 is true and 2 isn't it will throw the alert below
//   } else if (question1 === true) {
//     alert("Password needs numbers!")
//     // if 1 is false and 2 is true then the alert message below displays
//   } else if (question2 === true) {
//     alert("Password needs a special character!")
//   } else { }// I dont know
//   return;
// }


var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// var password = document.getElementById("password");

function generatePassword() {
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}


generateBtn.addEventListener("click", writePassword);
