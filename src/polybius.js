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
    const cypher = [
      ['1','a','f','l','q','v'], 
      ['2','b','g','m','r','w'], 
      ['3','c','h','n','s','x'],
      ['4','d','i','o','t','y'], 
      ['5','e','k','p','u','z']];
    const message = [];
    if (encode) {
       const toEncode = input.toLowerCase().split("");
        for (let i=0;i<toEncode.length;i++){
          if (toEncode[i] === ' ') {
            message.push(' ');
          } else if ( toEncode[i] === 'j') {
            message.push('42');
          } else {
            const found = cypher.filter((set => set.includes(toEncode[i])));
            message.push(found[0][0],found[0].indexOf(toEncode[i]));
          }
        }
      } else {
        try {
          if (input.split(' ').join('').length % 2 !== 0) throw 'incorrect character number';  
        } catch (error) {
          console.log(error);
          return false;
        }
        
        for (let i = 0; i<input.length; i++){
          const toDecode = input.split("");
          if (toDecode[i] === ' ') {
            message.push(' ');
          } else if ( toDecode[i] === '4' && toDecode[i+1] === '2') {
            message.push('i/j');
            i++;
          } else {
            const first = cypher.find(set => set.includes(toDecode[i]))
            const second = toDecode[i+1];
            message.push(first[second]);
            i++;
          }
        }
      }
      return message.join("");
    /*const cypher = ["abcde","fghik","lmnop","qrstu","vwxyz"]
    let message =[];   
    if (encode) {
      input = input.toLowerCase();
      for (let i = 0; i<input.length; i++){
        let ltr =input.charAt(i)
        if( ltr == " ") { 
          message.push(" ");
          continue;
        } else if (ltr =="j"){ ltr = "i"}
        for (let j = 0; j<cypher.length; j++){
          if (cypher[j].includes(ltr)){
            const partA = String(cypher[j].indexOf(ltr) + 1);
            const partB = String(j+1);      
            message.push(partA.concat(partB));
          }
        }
      }
      
    } else if (!encode) {

      try {
        
        //if (input.replaceAll(" ", "").toString().length % 2 !== 0) throw 'incorrect character number';
        if (input.replaceAll(" ", "").toString().length % 2 !== 0) throw 'incorrect character number';
      } catch (error) {
        console.log(error);
        return false;
      }
 
      for (let i = 0; i<input.length-1; i++){
        let ltr =input.charAt(i);
        if( ltr == " ") { 
          message.push(" ");
          continue;
        } else if ( Number(ltr) >= 1 || Number(ltr) <= 5){
          const partA = Number(input.charAt(i+1));
          const partB = Number(ltr);
          const letter = cypher[partA-1].charAt(partB-1);
          if (letter == 'i') {
            message.push('i/j');
          } else {message.push(letter)};
          i++;
          
        }
      }

    }
    
    return message.join("");
    */
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
