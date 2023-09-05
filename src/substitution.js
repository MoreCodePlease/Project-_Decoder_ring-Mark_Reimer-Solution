// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //refence cypher
    cypher = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];
    const message = [];
    try {
      if(alphabet === undefined ) throw 'undefined';
      if(alphabet.length !== 26) throw 'cypher length mismatch';
      const alphaArr = alphabet.split('');
      for (let i = 0;i<alphabet.length;i++) {
        if ((alphaArr.filter(letter => letter === alphabet.charAt(i))).length !== 1) throw 'repeating characters';
      }
    } catch (error) {
      console.log("error:", error);
      return false;
    }
    //if input is being encoded
    if (encode) {
      //forces all chars to lowercase
      input = input.toLowerCase();
      alphabet = alphabet.toLowerCase();
      //looping through each char in the input. 
      for (let i = 0;i<input.length;i++) {
        //spaces get passed through.
        if(input.charAt(i) ===" ") {
          message.push(" ");
          continue;
        }
        //substitutes the character by refering to the character's location
        message.push(alphabet.charAt(cypher.indexOf(input.charAt(i))));
      }
      return message.join("");
    } else if(!encode){
      //for each character
      for (let i = 0;i<input.length;i++) {
        if(input.charAt(i) ===" ") {
          message.push(" ");
          continue;
        }
        //substitutes the character by refering to the character's location
        message.push(cypher[alphabet.indexOf(input.charAt(i))]);
      }
      return message.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
