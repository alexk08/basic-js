//перебираем массив forEach-ом, если текущий элемент массив, то делаем ретёрн и запускаем эту же функцию, если нет, то двигаемся дальше

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    function check (array) {
      let result = false;
      array.forEach(element => {
        if (Array.isArray(element)) {
          result = true;
        }
      });
      return result;
    }
    let count = 2;
    function foo (arr) {
      let newArr = arr.reduce(
        (result, element) => result.concat(element),
        []
      );
      if (check(newArr)) {
        count++
        return foo(newArr);
      }
      return count;
    }
    if (!check(arr)) return 1;
    return foo(arr);
  }
}
