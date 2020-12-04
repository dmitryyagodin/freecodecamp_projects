function convertToRoman(num) {
  let presets = {
      1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"
  }

  let arr = Array.from(String(num), Number); // create an array from an integer
  let multiplier = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] *= multiplier;
    multiplier *= 10;
    arr[i] = presets[arr[i]];
    console.log(arr);
  }
  
  return arr.join("");
}

console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
   