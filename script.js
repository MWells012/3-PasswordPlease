// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&?@";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordLengthUser = parseInt(passwordLengthUser);
if (passwordLengthUser < 8) {
    alert("Password must have more than 7 characters!");
return "";
}
if (passwordLengthUser > 128) {
    alert("Password much not have more than 128 characters!");
return ""
}
var lowercaseCharactersChoice = confirm("Sprinkle in some lowercase characters?");
if (lowercaseCharactersChoice) {
passwordChar += lowercaseChar;
}

var uppercaseCharactersChoice = confirm("How about a few uppercase letters?");
if (uppercaseCharactersChoice) {
passwordChar += uppercaseChar;
}

var numericalCharactersChoice = confirm("What’s a password without a couple of numbers? Would you like to add them to yours?");
if (numericalCharactersChoice) {
passwordChar += numericalChar;
}

var specialCharacterChoice = confirm("Your password is pretty secure already, but how about a dash of special characters?");
if (specialCharacterChoice) {
passwordChar += specialChar;
}

for (var i = 0; i < passwordLengthUser; i++) {
password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
}

function writePassword(password){
//var password = generatePassword();
var pwTextArea = document.getElementById("#password");
pwTextArea.value = password;
return ("")

}
console.log(writePassword)
  passwordText.value = password;

}

// Add event listener to generate button -> button click
generateBtn.addEventListener("click", writePassword);
