// Algorithms: Inventory Update
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {   

  for (let newItem of arr2) {
    // if new item is not in the invetory, add it 
      if (!arr1.find(item => item[1] === newItem[1])) {
          arr1.push(newItem);
    // otherwise update the inventory by adding newItem's quanity
      } else {
          arr1.map(item => item[1] === newItem[1] && arr1[item[0] += newItem[0]])
      }
  }
  // return the updated inventory sorted alphabetically by item names
  return arr1.sort((a, b) => a[1] > b[1] ? 1 : -1)
}
var curInv = [
   [2, "Dirty Sock"],
   [21, "Bowling Ball"],
   [1, "Hair Pin"],
   [5, "Microphone"]
];
var newInv = [
   [2, "Hair Pin"],
   [3, "Half-Eaten Apple"],
   [67, "Bowling Ball"],
   [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));