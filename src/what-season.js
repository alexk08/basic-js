const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let season = '';
      if (date === undefined) {
        season = 'Unable to determine the time of year!';
      } else if (date.hasOwnProperty('getMonth')) {
        throw Error;
      } else  if (date.getMonth() >= 2 && date.getMonth() <=4) {
        season = 'spring';
      } else if (date.getMonth() >=5 && date.getMonth() <= 7) {
        season = 'summer';
      } else if (date.getMonth() >=8 && date.getMonth() <= 10) {
        season = 'autumn';
      } else {
        season = 'winter';
      }
    return season;
  };
  
