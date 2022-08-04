// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatedPassword = "";
var charSet = "";
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

//the function to generate
function generatePassword() {
    var passwordChars = "";
    var passwordLength = 0;
    passwordLength = prompt("Please enter the length you would like your password, must be between 8 and 128");

    // password length
    if (passwordLength >= 8 && passwordLength <= 128) {
      OptionLowerCase = confirm("Do you want lowercase letters?");
      OptionUpperCase = confirm("Do you want uppercase letters?");
      OptionNumeric = confirm("Do you want numbers?");
      OptionSpecialCharacters = confirm("Do you want special characters? (!@#$%&?)");

    // the options
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

function createPassword(passwordLength) {

    for (var i = 0; i < passwordLength; i++) {
  
      if(OptionLowerCase === true){
        charSet += lowerCaseSet;
      }
      if(OptionUpperCase === true){
        charSet += upperCaseSet;
      }
      if(OptionNumeric === true){
        charSet += numbersSet;
      }
      if(OptionSpecialCharacters === true){
        charSet += specialCharsSet;
      }
          generatedPassword += charSet[Math.floor(Math.random() * (charSet.length))];
          console.log(Math.floor(Math.random() * (charSet.length)))
    
    return generatedPassword;
}
}



