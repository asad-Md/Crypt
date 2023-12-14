const chars=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7',
  '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']',
   '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', ' ', '`', '~']


export function eKey(text){
    const key=Math.floor(Math.random()*(96)) //generate a random key
    var newJ; var char;var j;var shift
    let CipherText='';
    for (let i = 0; i < text.length; i++) {
        char = text[i]         //get the character at position i
        j=chars.indexOf(char) //get the index of the character in the array CHARS
                    //perform calculation acc to key (addition for now)
        newJ=j+key
        if(newJ>=95){ newJ-=95 }           //if newJ is greater than 96, subtract 96 from it
        // console.log(string[i]);
        // console.log(newJ,chars[newJ],j)
        CipherText += chars[newJ];  //get encrypted character from the array CHARS
        
      }
    return {CipherText,key}

}

// function strConvert(string){
//     // Example input string
//     var inputString = '3?B\\~w ,}\\\'?B\\FBttt';

//     // Parse the JSON string
//     try {
//         var parsedString = JSON.parse('"' + inputString + '"');
//         console.log(parsedString);
//     } catch (error) {
//         console.error('Error parsing the input string:', error);
//     }

// }

export function dKey(text,key){
    const text1=[...text]
    // console.log(text1)
    var oldJ; var char;var j;
    let PlainText='';  
    for (let i = 0; i < text.length; i++) {
        char = text[i]         //get the character at position i
        j=chars.indexOf(char) //get the index of the character in the array CHARS
                    //perform calculation acc to key (addition for now)
        oldJ=j-key
        if(oldJ<0){ oldJ+=95 }           //if newJ is greater than 96, subtract 96 from it
        while (oldJ < 0) {
            oldJ += chars.length;
        }
        
        PlainText += chars[oldJ];  //get encrypted character from the array CHARS
    }
    // console.log(plainText,key)
    return {PlainText,key}
}

// const key=Math.floor(Math.random()*chars.length)
// const obj= eKey('hello')
// console.log(obj)
// console.log(eKey('hello'))
// var string1= 's]'(;l\}%-]'(.'iii'
// string1 = strConvert(string1)
// var obj = dKey("s]'(;l\}%-]'(.'iii",135)
// console.log(obj)