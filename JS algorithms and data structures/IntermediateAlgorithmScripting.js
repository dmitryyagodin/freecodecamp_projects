// Introduction to the Intermediate Algorithm Scripting Challenges
// // The following challenges are part of FCC's Intermediate Algorithm Scripting Challenges. These should prepare you to complete the final challenges for the JavaScript Algorithms And Data Structures Certification.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/



// 1. Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    arr = arr.sort(function(a, b){return a-b});
    let sum = 0;
    do {
      sum += arr[0];
      arr[0] ++;
    } while (arr[0] <= arr[1]);
  
    return sum;
  }
  
  console.log(sumAll([10, 5]));

  