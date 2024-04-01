function swapCaseOfCharacter(string) {
    let swappedString = "";
    for (let character of string) {
      if (character === character.toUpperCase()) {
        swappedString += character.toLowerCase();
      } else {
        swappedString += character.toUpperCase();
      }
    }
    return swappedString;
  }
  
  let newString = swapCaseOfCharacter('The Quick Brown Fox*');
  console.log(newString);
