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
      if (initArr[i] === '--discard-next' && i !== (initArr.length - 1)) {
        i++;
      } else if (initArr[i] === '--discard-prev' && initArr[i - 2] !== '--discard-next' && i !== 0) {
        transformArr.pop();
      } else if (initArr[i] === '--double-next' && i !== (initArr.length - 1)) {
        transformArr.push(initArr[i + 1])
      } else if (initArr[i] === '--double-prev' && initArr[i - 2] !== '--discard-next' && i !== 0) {
        transformArr.push(initArr[i - 1])
      } else if (initArr[i] !== '--discard-next' && initArr[i] !== '--discard-prev' && initArr[i] !== '--double-next' && initArr[i] !== '--double-prev') {
        transformArr.push(initArr[i]);
      }
    }

    return transformArr;
  };