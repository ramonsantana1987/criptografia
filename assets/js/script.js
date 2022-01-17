function encrypt(text) {
   let result = '';
   function encrypting(t) {
      switch(t){
         case 'a':
            return 'ai';
         case 'e':
            return 'enter';
         case 'i':
            return 'imes';
         case 'o':
            return 'ober';
         case 'u':
            return 'ufat';
         default:
            return t;
      }
   }
   for(t in text) {
      result += encrypting(text[t]);
   }

   return result;
}

function decrypt(text) {

   for(let i = 0; i < text.length; i++) {
      if(text.indexOf('ai') > -1) {
         text = text.replace('ai','a')
      }
   
      if(text.indexOf('enter') > -1) {
         text = text.replace('enter','e')
      }
   
      if(text.indexOf('imes') > -1) {
         text = text.replace('imes','i')
      }
   
      if(text.indexOf('ober') > -1) {
         text = text.replace('ober','o')
      }
   
      if(text.indexOf('ufat') > -1) {
         text = text.replace('ufat','u')
      }
   }
   return text;
}

const text = 'abacaxi';
let result = encrypt(text);
let decryptText = '';

console.log(result);
console.log('descriptografado: ', decrypt(result))