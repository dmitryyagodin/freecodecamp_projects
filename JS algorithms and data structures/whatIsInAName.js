function whatIsInAName(collection, source) {
  var arr = [];
  let sourceEntries  = Object.entries(source);
      
  for (let i of collection) {
    if (sourceEntries.every(item => i[item[0]] === item[1])) {
      arr.push(i);
    }      
  }
  return arr;
}
  
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));