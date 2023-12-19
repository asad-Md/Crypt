const chars=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7',
  '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']',
   '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', ' ', '`', '~']

const i=8729721;
export function eKey(text){
    const key=Math.floor(Math.random()*(96)) //generate a random key
    var newJ; var char;var j;var shift
    let CipherText='';
    for (let i = 0; i < text.length; i++) {
        char = text[i]                   //get the character at position i
        j=chars.indexOf(char)           //get the index of the character in the array CHARS
                                       //perform calculation acc to key (addition for now)
        newJ=j+key
        if(newJ>=95){ newJ-=95 }     //if newJ is greater than 96, subtract 96 from it
        CipherText += chars[newJ];  //get encrypted character from the array CHARS
        
      }
    return {CipherText,key}

}

export function dKey(text,key){
    const text1=[...text]
    var oldJ; var char;var j;
    let PlainText='';  
    for (let i = 0; i < text.length; i++) {
        char = text[i]         //get the character at position i
        j=chars.indexOf(char) //get the index of the character in the array CHARS
        oldJ=j-key
        if(oldJ<0){ oldJ+=95 }           //if newJ is greater than 96, subtract 96 from it
        while (oldJ < 0) {
            oldJ += chars.length;
        }
        PlainText += chars[oldJ];  //get encrypted character from the array CHARS
    }
    return {PlainText}
}


export function e2Key(text){
    
    const key1=Math.floor(Math.random()*(96)) //generate a random key
    const n= Math.floor(Math.random()*(96))
    const key2=text.length//generate a random key
    var newJ; var char;var j;var shift
    
    function enc(text,key){
        let CipherTxt='';
        for (let i = 0; i < key2; i++) {
            char = text[i]          
            j=chars.indexOf(char)                                  
            newJ=j+key
            if(newJ>=95){ newJ-=95 }   
            CipherTxt += chars[newJ];  
        }
        return CipherTxt
    }
    const CipherT=enc(text,key1)
    const CipherText=enc(CipherT,key2)
    const key =((key2*n*10000)+(key1*100)+n)*i
    return {CipherText,key}
}




export function d2Key(text,key){
    key/=i
    const lol= key%100 
    const baka= Math.floor((key/100)%100)
    const meow= Math.floor(key/10000)/lol
    function dec(text,keyx){
        var oldJ; var char;var j;
        let PlainTxt=''
        for (let i = 0; i < text.length; i++) {
            char = text[i]
            j=chars.indexOf(char)
            oldJ=j-keyx
            if(oldJ<0){ oldJ+=95 }
            while (oldJ < 0) {
                oldJ += chars.length;
            }
            PlainTxt += chars[oldJ];
        }
        return PlainTxt
    }
    const PlainT= dec(text,meow)
    const PlainText= dec(PlainT,baka)
    return {PlainText}
}

