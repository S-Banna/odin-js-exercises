const sumAll = function(num1, num2) {
    let i;
    if (typeof(num1) != typeof(2) || typeof(num2) != typeof(2)) {
        return "ERROR";
    }
    else {
        if (num1 < 0 || num2 < 0) {
            return "ERROR";
        }
        else {
            if (num1 < num2) {
                for (i = 0; num1 <= num2; num1++) {
                    i = i + num1;
                }
            }
            else {
                for (i = 0; num2 <= num1; num2++) {
                    i = i + num2;
                }
            }
        }
    }
    return i;
};

// Do not edit below this line
module.exports = sumAll;
