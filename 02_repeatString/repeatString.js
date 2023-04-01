const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    else {
    let string2 = string;
    let returnString = "";
    for (i = 0; i < num; i++) {
        returnString = returnString + string2;
    }
    return returnString;
    }
};

// Do not edit below this line
module.exports = repeatString;
