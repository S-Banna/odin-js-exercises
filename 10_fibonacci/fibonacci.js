const fibonacci = function(num) {
    if (num < 0) {return "OOPS"}
    let fibo = [0, 1, 1];
    for (i = 2; fibo[i] < 200000; i++) {
        fibo.push(fibo[i] + fibo[i - 1]);
    }
    return fibo[num];
};

// Do not edit below this line
module.exports = fibonacci;
