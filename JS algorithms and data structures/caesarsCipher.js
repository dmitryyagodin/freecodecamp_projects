function rot13(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let ch = str.charCodeAt(i);
        if (ch >= 65 && ch < 78) {
            newStr += String.fromCharCode(ch + 13);
            // console.log("First" + str[i]);
        } else if (ch >= 78 && ch <= 90) {
            newStr += String.fromCharCode(ch - 13);
            // console.log("Second" + str[i]);
        } else {
            newStr += str[i];
            // console.log("Other" + str[i]);
        }
    }

    return newStr;
}
  
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));