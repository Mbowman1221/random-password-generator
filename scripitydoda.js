// Assignment Code
function generatePassword() {
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var UPPERLETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '!', '#', '$', '^', '?', ':', ',', ')', '(', '~', '-', '_'];
  var characterOptions = [];


 var NumOfCharacters = prompt("pick a total of between 8 and 128 characters");
  if (NumOfCharacters < 8 || NumOfCharacters > 128) {
    return ("invalid total number of characters");
   } else if (isNaN (NumOfCharacters)){
    NumOfCharacters = prompt("invalid total number of characters")
   }
   else {
    alert("new password will be " + NumOfCharacters + "  characters")
   }

  var Wantlowerletters = confirm("press ok to include lowercase letters and cancel to not include lowercase letters")
   if (Wantlowerletters){
    var LCase = alert("your password Will include lowercase letters")
   }
   else{
    alert("you have chosen to NOT have lowercase letters")
   };

var WantUPPERLETTERS = confirm("press ok to include uppercase letters and cancel to not include uppercase letters");
if (WantUPPERLETTERS){
  alert("password will have uppercase letters")
}
else {
  alert("password will have no uppercase letters")
};
var WantNumbers = confirm("press ok to include numbers and cancel to not include numbers")
if (WantNumbers){
  alert("password will have numbers")
}
else {
  alert("pasword will not have numbers")
};

var WantSpecial = confirm("press ok to include special characters and cancel to not include special characters")
if (WantSpecial) {
  alert("password will have special characters")
}
else {
  alert("paswword will not have special characters")
}

if (WantUPPERLETTERS === false && Wantlowerletters === false && WantNumbers === false && WantSpecial === false){
  return "choose at least one character type";
};


if (WantUPPERLETTERS) {
  characterOptions = characterOptions.concat(UPPERLETTERS);
}
if (Wantlowerletters) {
  characterOptions = characterOptions.concat(lowerletters);
}
if (WantNumbers) {
  characterOptions = characterOptions.concat(numbers);
}
if (WantSpecial){
  characterOptions = characterOptions.concat(special)
}

let thePassword = " "
for (let i = 0; i < NumOfCharacters; i++){
  let range = [Math.floor(Math.random() * characterOptions.length)];
thePassword = thePassword + characterOptions[range];}
return thePassword }

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);