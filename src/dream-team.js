const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
      return false;
    }
  
    let teamName = members.map(function(member) {
      if (typeof(member) === "string") {
        return member.trim().slice(0,1).toUpperCase();
      } 
    });
  
    if (teamName.join('') === '') {
      return false;
    }
    return teamName.sort().join('');
  };
