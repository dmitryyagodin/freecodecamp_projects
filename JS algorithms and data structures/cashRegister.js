// Source of the problem: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// Took me 2 days to solve

function checkCashRegister(price, cash, cid) {
    let sum = 0;
    let due = (cash - price) * 100;
    let noms = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]; // coin and bills in cents to avoid the floating point errors
    let result = {
        status: "OPEN",
        change: []
    };
    
    for (let j = 0; j < cid.length; j++) { // calculate the total register sum
        sum += cid[j][1] * 100;
    }
    
    if (sum < due) {
        result.status = "INSUFFICIENT_FUNDS";
        return result;
    } else if (sum === due)  {
        result.status = "CLOSED";
        result.change = cid;
        return result;
    }
        
    for (let i = 8; i >= 0; i--) { // check and use each register box from the highest to the lowest nominal 
        let box = cid[i][1] * 100;
        let count = 0;
        while (due >= noms[i]) {
            if (box >= noms[i]) {
                due -= noms[i];
                box -= noms[i];
                count ++;
            } else {
                break;
            }
        }
        cid[i][1] = noms[i] * count / 100;
        if (cid[i][1] > 0) {
            result.change.push(cid[i]);
        }
    }

    if (due > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
    }
    
    return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.