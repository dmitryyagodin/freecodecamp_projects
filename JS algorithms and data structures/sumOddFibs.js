// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
    let nums = [1, 1];
    let i=1;
    
    while (nums[nums.length - 1] < num + 1) {
      nums.push(nums[i] + nums[i-1]);
      i++;
    }
    nums.pop()  
    return nums.reduce((a, b) => b % 2 ? a + b : a, 0)
  }
  
  console.log(sumFibs(1000));