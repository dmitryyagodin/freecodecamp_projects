function palindrome(str) {
  var letters = []; 
  for (var i = 0; i < str.length; i++) {
    if ((/[a-zA-Z]/).test(str[i]) === true) {
          letters.push(str[i]);
    }
   }
   
  function sameLetter(letters) {
    let j = letters.length;
    while (j >= 1) {
      if (letters[0] === letters[letters.length - 1]) {
        letters = letters.slice(1, letters.length - 1);
        j -= 2;  
      } else {
          return false;
      } 
    }
    return true;
  }  
  return sameLetter(letters);
}

console.log(palindrome("ey %e "));