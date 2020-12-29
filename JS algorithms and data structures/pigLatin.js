// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
    const vowels = /[aoiue]/;
    if (vowels.test(str)) {
        return vowels.test(str[0]) ? str + 'way' : str.replace(/(^[^aoiue]+)([\w]+)/, '$2$1') + 'ay';
    } else {
        return str + "ay";
    }

}

console.log(translatePigLatin("rhythm")); // rhythmay