// Map the Debris (Orbital Period function)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (let i in arr) {
      let orb = earthRadius + arr[i].avgAlt;
      let orbPeriod = Math.round(2*Math.PI * (orb**3 / GM)**(1/2));
      arr[i]['orbitalPeriod'] = orbPeriod;
      delete arr[i]['avgAlt'];
    }
  
    return arr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));