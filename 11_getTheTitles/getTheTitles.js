const getTheTitles = function(array) {
    let final = [];
    for (i = 0; i < array.length; i++) {
        final.push(array[i].title);
    }
    return final;
};

// Do not edit below this line
module.exports = getTheTitles;
