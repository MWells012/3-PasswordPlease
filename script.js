// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatedPassword = "";
    var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbersSet = "0123456789";
    var specialCharsSet = "!@#$%&*";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button -> button click
generateBtn.addEventListener("click", writePassword);
//the function
function generatePassword() {
    var passwordChars = "";
    var passwordLength = 0;
    passwordLength = prompt("Please enter the length you would like your password, must be between 8 and 128");

    // verify password length
    if (passwordLength >= 8 && passwordLength <= 128) {
      OptionLowerCase = confirm("Do you want lowercase letters?");
      OptionUpperCase = confirm("Do you want uppercase letters?");
      OptionNumeric = confirm("Do you want numbers?");
      OptionSpecialCharacters = confirm("Do you want special characters? (!@#$%&?)");

    // verify at least one char type - these are the pOptions
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

function createPassword(pLength) {

    for (var i = 0; i < pLength; i++) {
  
          if(generatedPassword += lowerCaseSet[Math.floor(Math.random() * lowerCaseSet.length)]);
          if (generatedPassword += upperCaseSet[Math.floor(Math.random() * upperCaseSet.length)]);
          if (generatedPassword += numbersSet[Math.floor(Math.random() * numbersSet.length)]);
          if (generatedPassword += specialCharsSet[Math.floor(Math.random() * specialCharsSet.length)]);
        }
    
    return generatedPassword;
}




