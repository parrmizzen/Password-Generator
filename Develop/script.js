questions()
var question1 = confirm("Would you like numbers?");
var question2 = confirm("Would you like special characters?");



function questions() {
  // if 1 and 2 are true it populates a random password
  if (question1 && question2) {
    writePassword()
    // if 1 is true and 2 isn't it will throw the alert below
  } else if (question1 === true) {
    alert("Password needs numbers!")
    // if 1 is false and 2 is true then the alert message below displays
  } else if (question2 === true) {
    alert("Password needs a special character!")
  } else { }// I dont know
  return;
}

// 
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
