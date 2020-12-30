// Pair each character of the input string to its DNA pair
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
    const pairs = {
      'G': 'C',
      'C': 'G',
      'A': 'T',
      'T': 'A'
    }
    return str.split('')
           .map(i => (i + pairs[i]).split(''));
  }
  
  console.log(pairElement("GCG"));