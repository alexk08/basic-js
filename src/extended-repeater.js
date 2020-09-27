const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str);
    let separator = (options.hasOwnProperty('separator')) ? options.separator : '+';
    let addSeparator = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : '|';
    let addition = (options.hasOwnProperty('addition')) ? options.addition : '';
    
    if (options.additionRepeatTimes !== undefined) {
      for (let i = 1; i <= options.additionRepeatTimes; i++) {
        str = (i !== options.additionRepeatTimes) ? str + addition + addSeparator: str + addition;
      }
    } else {
      str = str + addition;
    }
    
    let strWithAdd = str;
  
    for (let j = 2; j <= options.repeatTimes; j++) {
      str = str + separator + strWithAdd;
    }
  
    return str;
  };
  