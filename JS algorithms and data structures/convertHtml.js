// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

function convertHTML(str) {
    const replacer = (item) => {
        switch (item) {
            case '&': return '&amp;';
            case '>': return '&gt;';
            case '<': return '&lt;';
            case '\"': return '&quot;';
            case '\'': return '&apos;';
        }
    }
    return str.replace(/&|<|\'|\"|>/g, replacer);
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));