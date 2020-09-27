const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct) {
        this.direct = direct;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error;
        } else {
            let stringArr = message.toLowerCase().split('');
            let keyArr = key.toLowerCase().split('');
            let count = 0;

            for (let i = 0; i < stringArr.length; i++) {
                const element = stringArr[i].charCodeAt(0) - 97;
                if (element >= 0 && element < 26) {
                    const elementKey = keyArr[count].charCodeAt(0) - 97;
                    stringArr[i] = String.fromCharCode(((element + elementKey)%26 + 97));
                    count++;
                }
                if (count === keyArr.length) {
                    count = 0;
                }
            }
            
            return (this.direct === false) ? stringArr.reverse().join('').toUpperCase() : stringArr.join('').toUpperCase();
        }
    }

    decrypt(cipher, key) {
        if (cipher === undefined || key === undefined) {
            throw Error;
        } else {
            let stringArr = cipher.toLowerCase().split('');
            let keyArr = key.toLowerCase().split('');
            let count = 0;

            for (let i = 0; i < stringArr.length; i++) {
                const element = stringArr[i].charCodeAt(0) - 97;
                if (element >= 0 && element < 26) {
                    const elementKey = keyArr[count].charCodeAt(0) - 97;
                    stringArr[i] = String.fromCharCode(((element - elementKey + 26)%26 + 97));
                    count++;
                }
                if (count === keyArr.length) {
                    count = 0;
                }
            }
            
            return (this.direct === false) ? stringArr.reverse().join('').toUpperCase() : stringArr.join('').toUpperCase();
        }
    }
}

module.exports = VigenereCipheringMachine;
