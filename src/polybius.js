// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function testing(input, encode = true) {
    try {
      if (input.replaceAll(" ", "").toString().length % 2 !== 0) throw 'incorrect character number';
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  function polybius(input, encode = true) {
    // your solution code here
    //the reference cypher. the fist number in a pair is represented in the first entry of each array, the second number is the position of the letter in the array.
    const cypher = [
      ['1','a','f','l','q','v'], 
      ['2','b','g','m','r','w'], 
      ['3','c','h','n','s','x'],
      ['4','d','i','o','t','y'], 
      ['5','e','k','p','u','z']];
    // initializing the output variable that will eventually be returned.
    const message = [];
    //to encode:
    if (encode) {
      //split the string into an array of lower case letters.
       const toEncode = input.toLowerCase().split("");
       //encodeing each character:
        for (let i=0;i<toEncode.length;i++){
          //spaces are exempted from encodeing and passed through.
          if (toEncode[i] === ' ') {
            message.push(' ');
            //j's are given the same number as i then passed through
          } else if ( toEncode[i] === 'j') {
            message.push('42');
            // for everything else:
          } else {
            //finds the array with the correct character in it usees the value of [0] and the index of the character in that array and pushes them both through to the messge array.
            const found = cypher.filter((set => set.includes(toEncode[i])));
            message.push(found[0][0],found[0].indexOf(toEncode[i]));
          }
        }
        //decoding
      } else {
        // if the message has an incorrect number of characters for smooth decoding:
        try {
          if (input.split(' ').join('').length % 2 !== 0) throw 'incorrect character number';
          if (input.split('').filter(char => char.Number() > 5)) throw 'incorrect character';
        } catch (error) {
          console.log(error);
          return false;
        }
        //for each character in the input that will be decoded
        for (let i = 0; i<input.length; i++){
          //let the spaces pass through
          const toDecode = input.split("");
          if (toDecode[i] === ' ') {
            message.push(' ');
            //let both i's and j's pass through as the combined 'i/j'
          } else if ( toDecode[i] === '4' && toDecode[i+1] === '2') {
            message.push('i/j');
            //skips the next number as it is already represented in the current iteration
            i++;
          } else {
            //cypher is referenced to the correct location to find the letter.
            const first = cypher.find(set => set.includes(toDecode[i]))
            const second = toDecode[i+1];
            message.push(first[second]);
            //skips the next number as it is already represented in the current iteration
            i++;
          }
        }
      }
      //joins the pushed values together and returns the message that was decoded.
      return message.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
