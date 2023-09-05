// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  

  function caesar(input, shift, encode = true) {
    // your solution code here
    try {
      if(shift > 25) throw 'shift is too big';
      if(shift < -25) throw 'shift is too small';
      if (shift === 0) throw 'change shift';
    } catch (error) {
      console.log(error)
      return false
    }
    let code = [];
    if(encode) {
      //
      for(let i = 0; i<input.length;i++) {
        let ltr = input.toLowerCase().charCodeAt(i);
        let newLtr= ltr;

        if(ltr > 122 || ltr < 97) {
          code.push(input.charAt(i))
          continue;
        } else if(ltr + shift >122){
          newLtr = ltr - 26;
        } else if(ltr + shift < 97){
          newLtr = ltr + 26;
        } 
        newLtr= newLtr+shift;
        code.push(String.fromCharCode(newLtr))
      }
    } else if (encode === false){
      for(let i = 0; i<input.length;i++) {
        let ltr = input.toLowerCase().charCodeAt(i);
        let newLtr= ltr;
        if(ltr > 122 || ltr < 97) {
          code.push(input.charAt(i))
          continue;
        } else if(ltr - shift >122){
          newLtr = ltr - 26;
        } else if(ltr - shift < 97){
          newLtr = ltr + 26;
        } 
        newLtr= newLtr - shift;
        code.push(String.fromCharCode(newLtr))
      }
    }
    
    return code.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
