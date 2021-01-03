// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
    let min = Math.min(...arr); // define the smaller integer
    let max = Math.max(...arr); // define the larger integer
    let multiple = min * max; // initialize the product of min and max
    
    // generate an array of integers between min and max values
    let numbers = [];
    for (let i = min+1; i <= max-1; i++) {
      numbers.push(i);
    } 
    
   // increase the value of the multiplier untill every number in between the min and max values (numbers) can be evenly devided by the multiplier 
    while (!numbers.every(item => Number.isInteger(multiple / item))) {
    // alternatively works with [(item => multiple % item === 0)]
      multiple += min * max;
    }
    
    return multiple;
  }
  
  
  console.log(smallestCommons([2,10]));
  console.log(smallestCommons([23, 18]));