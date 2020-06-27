// Assignment Code

//Traverse DOM elements
var passwordText = document.querySelector("#password");

// Declare variables
var specChar, numChar, lowCase, uppCase; //undefined at initiation
var specCharStr = "@%+\\/'!#$^?:,(){}[]~-_."; // Special characters supported for passwords from: https://docs.oracle.com/cd/E11223_01/doc.910/e11197/app_special_char.htm#MCMAD416
var numStr = "0123456789";
var uppStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowStr = "abcdefghijklmnopqrstuvwxyz";

// Write password to the #password input
function getUserInput() {
  // Get user input on password length through a prompt
  var passLength = prompt("How many characters would you like your password to contain? (minimum 8 char, max 128 char)");

  if (passLength >= 8 && passLength <= 128) {
    //if the user selects a valid number, then ask the series of questions below
    specChar = confirm("Click OK to confirm you'd like to include special characters.");
    numChar = confirm("Click OK to confirm you'd like to include numeric characters.");
    lowCase = confirm("Click OK to confirm you'd like to include lowercase characters.");
    uppCase = confirm("Click OK to confirm you'd like to include uppercase characters.");
    passwordText.value = generatePassword(passLength); //assign #password value to the return result of the generatePassword function when you pass the length through
  } else if (passLength == null) { //if user cancels 'Generate Password' request, alert them to click when ready
    alert("Click 'Generate Password' when ready.");
    //if the user selects an invalid number, perform recursion which runs the function again to prompt length question again until it is valid
  } else {
    alert("Invalid entry.");
    getUserInput();
  }
}

function generatePassword(userPassLength) {
  var possChar = "";
  var passGen = "";
  
  if (specChar == true) {
    possChar = possChar.concat(specCharStr);
  }
  if (numChar == true) {
    possChar = possChar.concat(numStr);
  }
  if (lowCase == true) {
    possChar = possChar.concat(uppStr);
  }
  if (uppCase == true) {
    possChar = possChar.concat(lowStr);
  }

  for (var i = 0; i < userPassLength; i++) {
    var ind = Math.floor(Math.random() * possChar.length);
    passGen = passGen.concat(possChar.charAt(ind));
  }

  return passGen;
}

// Add event listener to generate button on click
document.querySelector("#generate").addEventListener("click", getUserInput);