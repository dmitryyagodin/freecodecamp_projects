function telephoneCheck(str) {
    let main = /-?\s?\d{3}-?\s?\d{4}$/; // test the 7 last digits
    let area = /(\(\d{3}\)$)|(\d{3}$)/; // test the area code
    if (main.test(str)) {
        str = str.replace(main, "");
    } else {
        return false;
    }
    
    if (area.test(str)) {
        str = str.replace(area, "")
    } else {
        return false;
    }
    
    if (str === "1" || str === "1 " || str === "") {
          return true;
      } else {
          return false;
      }
}
  
console.log(telephoneCheck("555-5555")); // should return false.
console.log(telephoneCheck("5555555")); // should return false.
// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("5555555555") should return true.
// telephoneCheck("555-555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("(6054756961)") should return false
// telephoneCheck("2 (757) 622-7382") should return false.
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false
// telephoneCheck("2 757 622-7382") should return false.
// telephoneCheck("10 (757) 622-7382") should return false.
// telephoneCheck("27576227382") should return false.
// telephoneCheck("(275)76227382") should return false.
// telephoneCheck("2(757)6227382") should return false.
// telephoneCheck("2(757)622-7382") should return false.
// telephoneCheck("555)-555-5555") should return false.
// telephoneCheck("(555-555-5555") should return false.
// telephoneCheck("(555)5(55?)-5555") should return false.