const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
  
    getLength() {
      return this.chain.length;
    },
    addLink(value) {
      this.chain.push('( ' + value + ' )');
      return this;
    },
    removeLink(position) {
      if (typeof position !== 'number' || position >= this.chain.length || position <= 0) {
        this.chain = [];
        throw Error;
      } else {
        this.chain.splice((position-1), 1);
      }
      return this;
    },
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    finishChain() {
      let currentChain = this.chain.join('~~');
      this.chain = [];
      return currentChain;
    }
  };
  
  module.exports = chainMaker;
