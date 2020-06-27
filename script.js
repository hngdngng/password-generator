// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Declare variables
  var specCharStr = "@%+\\/'!#$^?:,(){}[]~-_."; // Special characters supported for passwords from: https://docs.oracle.com/cd/E11223_01/doc.910/e11197/app_special_char.htm#MCMAD416
  var numStr = "0123456789";
  var uppStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowStr = "abcdefghijklmnopqrstuvwxyz";
  var passwordText = document.querySelector("#password");
  //console.log(passwordText);
  var passGen = "";

  // Get user input on password length through a prompt
  var passLength = prompt("How many characters would you like your password to contain? (minimum 8 char max 128 char)");

  if (passLength >= 8 && passLength <= 128) {
    //if the user selects a valid number, then ask the series of questions below
    var specChar = confirm("Click OK to confirm you'd like to include special characters.");
    var numChar = confirm("Click OK to confirm you'd like to include numeric characters.");
    var lowCase = confirm("Click OK to confirm you'd like to include lowercase characters.");
    var uppCase = confirm("Click OK to confirm you'd like to include uppercase characters.");
    generatePassword();
    //if the user selects an invalid number, perform recursion which runs the function and prompts length question again until it is valid
  } else { 
    alert("Invalid entry.");
    writePassword();
  }

  function generatePassword() {
    var password = "";
    if (specChar == true) {
      password = password.concat(specCharStr);
    }
    if (numChar == true) {
      password = password.concat(numStr);
    }
    if (lowCase == true) {
      password = password.concat(uppStr);
    }
    if (uppCase == true) {
      password = password.concat(lowStr);
    }
    //console.log(password);

    for (var i = 0, n = password.length; i < passLength; i++) {
      var ind = Math.floor(Math.random() * n);
      passGen = passGen.concat(password.charAt(ind));
      console.log(passGen);
    }
  }
  //generate password in the text area
  passwordText.value = passGen;
  //console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
