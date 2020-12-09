// Project Euler: Problem 1: Multiples of 3 and 5 Passed
function multiplesOf3and5(number) {
  var sum = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

multiplesOf3and5(1000);

// Project Euler: Problem 2: Even Fibonacci Numbers
function fiboEvenSum(n) {
  var i = 2;
  var sum = 0;
  var numbers = [1, 2];
  while (numbers[numbers.length - 1] <= n) {
    numbers.push(numbers[i-1] + numbers[i-2]);
    i++;
  }
  
  for (var j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] % 2 === 0) {
      sum = sum + numbers[j];
      console.log(sum);
    }
  }

  return sum;
}

fiboEvenSum(1000)