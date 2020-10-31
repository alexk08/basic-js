//перебираем массив forEach-ом, если текущий элемент массив, то делаем ретёрн и запускаем эту же функцию, если нет, то двигаемся дальше

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let maxDepth = 1;

    arr.forEach(element => {
      if (Array.isArray(element)) {
        depth = 1;
        depth += this.calculateDepth(element);
        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    });

    return maxDepth;
  }
}
