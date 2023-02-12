
questions()
var question1 = confirm("Would you like numbers?");
var question2 = confirm("Would you like special characters");



function questions() {
  if (question1 && question2) {
    writePassword()
  } else if (question1) {
    alert("Password needs numbers!")
  } else if (question2) {
    alert("Password needs a special character!")
  } else { }
  return;
}



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
