// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  // prompts user for character limit of password
  var userInput = parseInt(prompt("Please enter character limit for password."));
  // ensures password is the right length
  if (userInput < 8 || userInput > 128 || isNaN(userInput)) {
    alert("Password should be between 8 and 128 characters. Try again.");
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
