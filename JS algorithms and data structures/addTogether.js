// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
    const isNumber = (n) => typeof n === 'number';
    
    if (![...arguments].every(n => isNumber(n))) {
      return undefined
    }
    else if ([...arguments].length > 1) {
      return [...arguments].reduce((a, b) => a + b, 0);
    } else {
      const add = (n1, n2 = arguments[0]) => isNumber(n1) ? n1 + n2 : undefined; 
      return add;
    }
}
console.log(addTogether(2,3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(5));
console.log(addTogether(2, "3"));