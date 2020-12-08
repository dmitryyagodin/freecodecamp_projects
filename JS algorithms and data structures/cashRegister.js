function checkCashRegister(price, cash, cid) {
    var payback = cash - price;
    let result = {
        status: "OPEN", // ["INSUFFICIENT_FUNDS", "CLOSED"],
        change: []        
    }
    let index = 0;
    function check(box, amount) { // check cash register's box name, amount
        let count = 1;
        while (payback >= amount) {
            if (box[1] >= amount) {
                box[1] -= amount;
                payback -= amount;
                result.change[index] = [box[0],  amount * count];
                count++;
            } else {
                break;
            }
        } index ++;
    }   

    
   check(cid[7], 20);
   check(cid[6], 10);
   check(cid[5], 5);
   check(cid[4], 1);
   check(cid[3], 0.25);
   check(cid[2], 0.1);
   check(cid[1], 0.05);
   check(cid[0], 0.01);
   console.log(payback);
   
   return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

//    let boxes = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];