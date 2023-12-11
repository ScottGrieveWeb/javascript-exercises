const palindromes = function (a) {
    let noSpaces = a.split(" ").join("");
    let wordNoPunc = noSpaces.replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ");
    let word = wordNoPunc.toLowerCase();
    let arr = word.split("");
    let reverseA = arr.reverse().join("");
    
    if (word === reverseA){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
