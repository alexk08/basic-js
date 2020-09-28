const CustomError = require("../extensions/custom-error");

module.exports = function transform(initArr) {
    if (!Array.isArray(initArr)) {
      throw Error;
    }
    if (initArr.length === 0) {
      return [];
    }
    let transformArr = initArr.slice();
  
    for (let i = 0; i < transformArr.length; i++) {
      if (transformArr[i] === '--double-next') {
        if (i+1 !== transformArr.length) {
          transformArr.splice((i), 1, transformArr[i+1]);
        } else {
          transformArr.splice((i), 1);
        }
      } else if (transformArr[i] === '--double-prev') {
        if (i !== 0) {
          transformArr.splice((i), 1, transformArr[i-1]);
        } else {
          transformArr.splice((i), 1);
        }
      } 
    // }
  
    // for (let i = 0; i < transformArr.length; i++) {
      else if (transformArr[i] === '--discard-next') {
        if (i+1 !== transformArr.length) {
          transformArr.splice((i), 2);
        //   i = i-1;
        } else {
          transformArr.splice((i), 1);
        }
      } else if (transformArr[i] === '--discard-prev') {
        if (i !== 0) {
          transformArr.splice((i-1), 2);
        //   i = i-1;
        } else {
          transformArr.splice((i), 1);
        }
      }
    }

    for (let i = 0; i < transformArr.length; i++) {
        if ((transformArr[i] === '--double-next') || (transformArr[i] === '--double-prev') || (transformArr[i] === '--discard-next') || (transformArr[i] === '--discard-prev')) {
            transformArr.splice((i), 1);
        }
    }
    // console.log(initArr);
    return transformArr;
  };
