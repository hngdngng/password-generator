// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Special characters supported for passwords from: https://docs.oracle.com/cd/E11223_01/doc.910/e11197/app_special_char.htm#MCMAD416
  var specCharArray = ["@", "%", "+", "\\", "/", "\'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "-", "_", "."];
  
  // Get user input on password length through a prompt
  var passLength = prompt("How many characters would you like your password to contain? (minimum 8 char max 128 char)");
  console.log(passLength);
  if (passLength >= 8 && passLength <= 128) {
    //if the user selects a valid number, then ask the series of questions below
    var specChar = confirm("Click OK to confirm you'd like to include special characters.");
    var numChar = confirm("Click OK to confirm you'd like to include numeric characters.");
    var lowCase = confirm("Click OK to confirm you'd like to include lowercase characters.");
    var uppCase = confirm("Click OK to confirm you'd like to include uppercase characters.");
    // } else if (passLength === null) {
    //alert("Click Generate Password when you're ready.");
    //the 2 lines above would give users the option to cancel their request to generate a password without an invalid entry alert
  } else {
    alert("Invalid entry.");
    writePassword();
    //if the user selects an invalid number, perform recursion which runs the function and prompts length question again until it is valid
  }

  //generate password in the text area
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
