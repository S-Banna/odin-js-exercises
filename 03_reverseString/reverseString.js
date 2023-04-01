const reverseString = function(string) {
    let reverseArray = string.split("");
    let reversed = "";
    for (i = reverseArray.length - 1; i >=0; i--) {
        reversed = reversed + reverseArray[i];
    }
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
