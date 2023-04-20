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


// prompts user to select character styles for password
var lowercase = confirm("Do you want to include lowercase letters in your password?");
var uppercase = confirm("Do you want to include uppercase letters in your password?");
var numbers = confirm("Do you want to include numbers in your password?");
var special = confirm("Do you want to include special characters in your password?");

// ensures user chooses at least one character style
if (!lowercase && !uppercase && !numbers && !special) {
  alert("You must choose at least one character style.");
  return;
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
