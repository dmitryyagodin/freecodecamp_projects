// Takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(args) {
    let arr = [...arguments].map(item => Array.from(new Set(item)));
    let newArr = [];
    for (let i in arr) {
      newArr.push(arr[i]);
      newArr = newArr.flat();
      newArr = newArr.filter(item => newArr.indexOf(item) === newArr.lastIndexOf(item));
    }
     
    return newArr;
  }
  
  console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // => [ 3, 5, 4 ]
  console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // => [ 1, 4, 5 ]