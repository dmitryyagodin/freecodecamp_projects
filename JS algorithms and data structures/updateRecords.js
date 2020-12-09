// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
// Only change code below this line
function updateRecords(object, id, prop, value) {
if (prop !== "tracks" && value !== "") {
    object[id][prop] = value;
}
if (prop === "tracks" && object[id].tracks === undefined) {
    object[id][prop] = [value];
}
if (value === "") {
    delete object[id][prop];
}
if (prop === "tracks" && value !== "") {
        object[id][prop].push(value);
    }
return object;
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
////artist should be ABBA
//PASSED

console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
// tracks should have Take a Chance on Me as the last element.
// PASSED

console.log(updateRecords(collection, 2548, "artist", ""));
// artist should not be set
// PASSED

console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
// tracks should have Addicted to Love as the last element.

console.log(updateRecords(collection, 2468, "tracks", "Free"));
// // tracks should have 1999 as the first element.

console.log(updateRecords(collection, 2548, "tracks", ""));
// //tracks should not be set

console.log(updateRecords(collection, 1245, "albumTitle", "Riptide"));
// //albumTitle should be Riptide