const CustomError = require("../extensions/custom-error");

module.exports = function transform(initArr) {
    if (!Array.isArray(initArr)) {
      throw Error;
    }
    if (initArr.length === 0) {
      return [];
    }
    let transformArr = [];
  
    for (let i = 0; i < initArr.length; i++) {
      if (initArr[i] === '--double-next') {
        if (i+1 !== initArr.length) {
          initArr.splice((i), 1, initArr[i+1]);
        } else {
          initArr.splice((i), 1);
        }
      } else if (initArr[i] === '--double-prev') {
        if (i !== 0) {
          initArr.splice((i), 1, initArr[i-1]);
        } else {
          initArr.splice((i), 1);
        }
      } 
    }
  
    for (let i = 0; i < initArr.length; i++) {
      if (initArr[i] === '--discard-next') {
        if (i+1 !== initArr.length) {
          initArr.splice((i), 2);
          i = i-1;
        } else {
          initArr.splice((i), 1);
        }
      } else if (initArr[i] === '--discard-prev') {
        if (i !== 0) {
          initArr.splice((i-1), 2);
          i = i-1;
        } else {
          initArr.splice((i), 1);
        }
      }
    }
  
    transformArr = initArr;
    return transformArr;
  };
