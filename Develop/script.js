// References to the #generate element
var generateBtn = document.querySelector("#generate");

// TODO: Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added event listener to generateBtn to start the writePassword function
generateBtn.addEventListener("click", writePassword);
