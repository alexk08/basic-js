const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE_CONSTANT = 0.693;

module.exports = function dateSample(sampleActivity) {
  let sampleAge;
  if (sampleActivity === undefined || isNaN(parseFloat(sampleActivity)) || typeof(sampleActivity) !== "string" || parseFloat(sampleActivity) > MODERN_ACTIVITY || parseFloat(sampleActivity) <= 0) {
    sampleAge = false;
  } else {
    sampleAge = Math.ceil((-1)*Math.log(parseFloat(sampleActivity)/MODERN_ACTIVITY)*HALF_LIFE_PERIOD/RATE_CONSTANT);
  }
  return sampleAge;
};
