// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the first character in the original word when you are replacing it.

function myReplace(str, before, after) {
    return /[A-Z]/.test(before)
           ? str.replace(before, after[0].toUpperCase() + after.slice(1))
           : str.replace(before, after[0].toLowerCase() + after.slice(1))
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("I think we should look up there", "up", "Down"));
  console.log(myReplace("His name is Tom", "Tom", "john"));