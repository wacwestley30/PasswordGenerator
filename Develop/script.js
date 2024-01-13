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


// prompt(8-128)
// prompt for length and set it to a var
// alert( let lowercase = confirm('lowercase?') )
// alert the var of the confirm() the confirm is OK===true and Cancel===False



// TODO: Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = doc.querySelector('#password');

  // Criteria
  // TODO: Add all criteria to generatePassword() function
  function charLength(){
    let char = prompt('Please choose a length between 8-128 characters.', '8');

    if (char >= 8 && char <= 128) {
      console.log(char);
    } else {
      alert('Please Select Number bettwen 8-128');
      console.log(char);
      charLength();
    }
  };

  function lowercase() {
    let lowCase = confirm('Do you require lowercase letters? Press OK for Yes or Cancel for No.');

    if (lowCase === true) {
      alert('Lowercase letters added to your Generated Password!');
    }

    console.log(lowCase);
  }

  function uppercase() {
    let upCase = confirm('Do you require uppercase letters? Press OK for Yes or Cancel for No.');

    if (upCase === true) {
      alert('Uppercase letters added to your Generated Password!');
    }

    console.log(upCase);
  }

  function numeric() {
    let nums = confirm('Do you require numbers? Press OK for Yes or Cancel for No.');

    if (nums === true) {
      alert('Numbers added to your Generated Password!');
    }

    console.log(nums);
  }

  function specialChar() {
    let special = confirm('Do you require symbols? Press OK for Yes or Cancel for No.');

    if (special === true) {
      alert('Symbols added to your Generated Password!');
    }

    console.log(special);
  }

  charLength();
  lowercase();
  uppercase();
  numeric();
  specialChar();

  passwordText.value = password;
}

// Added event listener to generateBtn to start the writePassword function
generateBtn.addEventListener('click', writePassword);