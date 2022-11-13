/*
Vowels
Why are Vowels important? Vowels are found in every syllable of every word. They enable us to distinguish between words such as pant, pint, pent, punt or slip, slap, slop. If a child doesn't understand vowel sounds, they will struggle with reading.

Vowels are very essential characters to form any meaningful word in English dictionary. There are 5 vowels in English language - a, e, i, o u. You are given a randoms string containing only lowercase letters and you need to find if the string contains ALL the vowels.
 */


let fs = require("fs");
let data = fs.readFileSync('vowels.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let len=parseInt(readLine());
let vowels=['a','e','i','o','u']
let txt=readLine().split("");

if(len>4){
for(let j=0;j<5;j++){
for(let i=0;i<len;i++){
    if(txt[i]===vowels[j]){
        
        vowels.splice(j,1)
        j=-1;
        continue;
    }
}
}
if(vowels.length===0){
    console.log("YES")
}else{
    console.log("NO")
}
}
else{
    console.log("NO")
}