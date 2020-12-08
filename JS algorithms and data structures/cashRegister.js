function checkCashRegister(price, cash, cid) {
    var payback = cash - price;
    let result = {
        status: "OPEN", // ["INSUFFICIENT_FUNDS", "CLOSED"],
        change: []        
    }
    function check(box, amount) { // check cash register's box name, amount
        let count = 1;
        while (payback >= amount) {
            if (box[1] >= amount) {
                box[1] -= amount;
                payback -= amount;
                result.change = [box[0],  amount * count];
                count++;
            } 
        } 
    }   
   let boxes = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
    
   check(cid[7], 20);
   console.log(payback);
   return result;
}

console.log(checkCashRegister(30, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.