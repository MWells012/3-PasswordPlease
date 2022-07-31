// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button -> button click
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  // creates user prompt to select password length
  function writePassword() {
    var passwordChars = "";
    var passwordLength = 0;
    var OptionLowerCase = false, OptionUpperCase = false, OptionNumeric = false, OptionSpecialCharacters = false;
    passwordLength = prompt("Please enter the length you would like your password, must be between 8 and 128");

    // verify password length
    if (passwordLength >= 8 && passwordLength <= 128) {
      OptionLowerCase = confirm("Do you want lowercase letters?");
      OptionUpperCase = confirm("Do you want uppercase letters?");
      OptionNumeric = confirm("Do you want numbers?");
      OptionSpecialCharacters = confirm("Do you want special characters? (!@#$%&?)");

    // verify at least one char type
    if (OptionLowerCase || OptionUpperCase || OptionNumeric || OptionSpecialCharacters) {
      return passwordChars = createPassword(passwordLength, [OptionLowerCase, OptionUpperCase, OptionNumeric, OptionSpecialCharacters]);
    }
    else {
      alert("You need to pick at least one character type.");
    }
  }  
else {
  alert("Invalid password length.");
}
  
}

function createPassword(pLength, pOptions) {
  var generatedPassword = "";
  const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersSet = "0123456789";
  const specialCharsSet = "!@#$%&?";
}
}