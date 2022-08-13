// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ",", "<", ">", "'", "/", "\\", "-"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var length = parseInt(prompt("What will be the length of your password?"))
  console.log(length)
  if (length < 8 || length > 128 || length==="" || isNaN (length)) {
    alert("Your password must be between 8 to 128 characters.");
    return "";
  }
  var passwordoptions = []

  var asknumbers = confirm("Do you want to include numbers?")
  console.log(asknumbers)

  if (asknumbers === true) {
    passwordoptions = numbers.concat(passwordoptions);
    console.log(passwordoptions)
  }

  // repeat above steps (lines 27-33) for lowercase, uppercase, specialcharacters

  var asklowercase = confirm("Do you want to include lowercase leters?")
  console.log(lowercase)

  if (asklowercase === true) {
    passwordoptions = lowercase.concat(passwordoptions);
    console.log(passwordoptions)
  }

  var askuppercase = confirm("Do you want to include uppercase letters?")
  console.log(uppercase)

  if (askuppercase === true) {
    passwordoptions = uppercase.concat(passwordoptions);
    console.log(passwordoptions)
  }

  var askspecialcharacters = confirm("Do you want to include uppercase letters?")
  console.log(uppercase)

  if (askspecialcharacters === true) {
    passwordoptions = specialcharacters.concat(passwordoptions);
    console.log(passwordoptions)
  }

  // validate passwordoptions
  if (passwordoptions.length === 0) {
    alert("You have to select atleast one type of characters");
    return "";
  }

  // Create an empty string (password string)
  var string = ""

  // For the `length` of password
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random()*passwordoptions.length)
    console.log(index)
    // Select a random character from `passwordoptions'
    var digit = passwordoptions[index]

    // Add the character to our password string
    string += digit 
  }

  // return the password
   return string
}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
