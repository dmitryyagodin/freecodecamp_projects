// using recurssion and ternary operator to return an array of integers in a predefined range of numbers

function rangeOfNumbers(startNum, endNum) {
    return (startNum === endNum) ? [startNum] : [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
  };
  
console.log(rangeOfNumbers(1,5)); // => [ 1, 2, 3, 4, 5 ]


// useing recursion and ternary operator to return an array of integers decrementing from n to 1.
function rangeOfNumbersDesc(n) {
  return (n < 1) ? [] : [n].concat(rangeOfNumbersDesc(n - 1));
}

console.log(rangeOfNumbersDesc(5)); // => [ 5, 4, 3, 2, 1 ]
