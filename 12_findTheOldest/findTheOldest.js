const findTheOldest = function(array) {
    let currentYear = new Date().getFullYear();
    for (i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath == undefined) {
            array[i].age = currentYear - array[i].yearOfBirth;
        } else {
            array[i].age = array[i].yearOfDeath - array[i].yearOfBirth;
        }
    }
    let newArray = array.sort(function(a, b) {
        if (a.age > b.age) {
            return -1;
        } else {
            return 1;
        }
    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
