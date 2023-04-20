// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for each character style
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "~!@#$%^&*()=+[]/{}|:<>?"

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
var addLowercase = confirm("Do you want to include lowercase letters in your password?");
var addUppercase = confirm("Do you want to include uppercase letters in your password?");
var addNumbers = confirm("Do you want to include numbers in your password?");
var addSpecial = confirm("Do you want to include special characters in your password?");

// ensures user chooses at least one character style
if (!lowercase && !uppercase && !numbers && !special) {
  alert("You must choose at least one character style.");
  return;
}

// new variable to contain the user choices of character styles
var userChoice = "";

// user's choices being added to userChoice
if (addLowercase) {
  userChoice += lowercase;
}

if (addUppercase) {
  userChoice += uppercase;
}

if (addNumbers) {
  userChoice += numbers;
}

if (addSpecial) {
  userChoice += special;
}

// new variable for printed password
var finalPassword = "";

// loop ensuring random characters from userChoice are picked and used in finalPassword
for (var i = 0; i < userInput; i++) {
  var index = Math.floor(Math.random() * userChoice.length);
  finalPassword += userChoice[index];
}

return finalPassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
