function palindrome(str) {
  var letters = []; 
  for (var i = 0; i < str.length; i++) {
    if ((/[a-zA-Z0-9]/).test(str[i]) === true) {
          letters.push(str[i].toLowerCase());
    }
   }
   
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

console.log(palindrome("A man, a plan, a canal. Panama"));