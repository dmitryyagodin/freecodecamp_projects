// Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let start = letters.indexOf(str[0]) + 1;
    let end = letters.indexOf(str[str.length - 1]) - 1;
    
    for (let i = start; i <= end; i++) {
      if (!str.includes(letters[i])) {
        return letters[i];
      }
    }
  }
  
console.log(fearNotLetter("abce"));