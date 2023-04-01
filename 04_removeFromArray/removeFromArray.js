const removeFromArray = function(...args) {
    let array = args[0];
    let remove = args.slice(1);
    for (i = array.length - 1; i >= 0; i--) {
        let test = array[i];
        for (y = remove.length - 1; y >= 0; y--) {
            if (test === remove[y]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};


// if (test == remove[0]) {
//    array.splice(i, 1);
//}
// Do not edit below this line
module.exports = removeFromArray;
