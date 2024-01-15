// References
var doc = document;
var generateBtn = doc.querySelector('#generate');
var securePassword = doc.querySelector('#password');

// TODO: Click button shows prompts for password criteria to select from
//       Length of 8-128 Characters
//       Criteria: lowercase, uppercase, numeric, and/or special characters
//       At least one Criteria must be selected
//       Password then created using criteria
//       Password either displayed or made and alert on the page. (Displayed)
//       Define geratePassword function first appeared below writePassword function

function generatePassword() {

  // Criteria
  // charLength creates a prompt and defaults to 8 the minimum length.
  // it then checks if its between 8 and 128 in length if not asks again
  function charLength(){
    let char = prompt('Please choose a length between 8-128 characters.', '8');

    if (char >= 8 && char <= 128) {
      alert('You have requested a ' + char + ' character long password.')
    } else {
      alert('Please Select Number bettwen 8-128');
      charLength();
    }

    return char;
  };

  // Checks
  // next group of functions create the checks for the Password Generator App
  function lowercase() {
    let lowCase = confirm('Do you require lowercase letters? Press OK for Yes or Cancel for No.');

    if (lowCase === true) {
      alert('Lowercase letters added to your Generated Password!');
    }

    return lowCase;
  }

  function uppercase() {
    let upCase = confirm('Do you require uppercase letters? Press OK for Yes or Cancel for No.');

    if (upCase === true) {
      alert('Uppercase letters added to your Generated Password!');
    }

    return upCase;
  }

  function numeric() {
    let nums = confirm('Do you require numbers? Press OK for Yes or Cancel for No.');

    if (nums === true) {
      alert('Numbers added to your Generated Password!');
    }

    return nums;
  }

  function specialChar() {
    let special = confirm('Do you require symbols? Press OK for Yes or Cancel for No.');

    if (special === true) {
      alert('Symbols added to your Generated Password!');
    }

    return special;
  }

  // Criteria Variables
  var characterLength = charLength();
  var lowerCase = lowercase();
  var upperCase = uppercase();
  var numericCharacters = numeric();
  var specialCharacters = specialChar();

  // Made if statement to make sure at least one check was true to generate a password and if none were questions were asked again
  if (lowerCase === false && upperCase === false && numericCharacters === false && specialCharacters === false) {
    alert('Please select at least 1 of the following: Lowercase Letters, Uppercase Letters, Numbers or Symbols.');
    charLength();
    lowercase();
    uppercase();
    numeric();
    specialChar();
  }  

  
  // generate makes an object of checks to store choices then the default chars are listed
  // another object for characters is created to store options for program to choose from
  // conditional operators are used to simplify code if checks are true then add from the options in character object if false then empty options
  // a newPass is formed and returned
  function generate() {
    var checks = {
      length: characterLength,
      lowercase: lowerCase,
      uppercase: upperCase,
      numbers: numericCharacters,
      symbols: specialCharacters
    }

    var defaultCharacters = 'abcdefghijklmnopqrstuvwxyz';
    var characters = {
      lowerCase: defaultCharacters,
      upperCase: defaultCharacters.toUpperCase(),
      numbers: '0123456789',
      symbols: '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
    }
    var charList = [
      checks.lowercase ? characters.lowerCase : [],
      checks.uppercase ? characters.upperCase : [],
      checks.numbers ? characters.numbers : [],
      checks.symbols ? characters.symbols : []
    ].join('')

    var newPass = Array.from({ length: checks.length }, () => Math.floor(Math.random() * charList.length))
        .map(number => charList[number])
        .join('')
    return newPass;
  }

  var generatePassword = generate();
  return generatePassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = doc.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);