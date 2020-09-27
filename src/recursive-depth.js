const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
        foo(arr);
        function foo(array) {
            // let newArr = [];
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                if (Array.isArray(element)) {
                    // newArr.push(element);
                    count++;
                    for (let j = 0; j < element.length; j++) {
                        // const element = array[j];
                        return foo(element);
                    }
                } 
            }
            // if (newArr.length >= 1) {
            //     count++;
            //     for (let i = 0; i < newArr.length; i++) {
            //         return foo(newArr[i]);
            //     }
            // } else {
            //     return count;
            // }
        }
        return count;
    }
};