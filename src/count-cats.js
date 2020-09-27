const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let count = 0;
    matrix.forEach(function(it){
        it.forEach(function(item) {
        if (item === '^^') {
            count ++;
        }
        });
    });
    return count;
};
