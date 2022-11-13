/*
Description:
Given a string st, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in st:

If the group's length is 1, append the character to s. Otherwise, append the character followed by the group's length.

Note that group lengths that are 10 or longer will be split into multiple characters in st. Please take note you just need to finish the compress function. If there is only one of a character present just print out the character without any number after it. For example "a" instead of "a1".

Sample Input

2
aabbccc
abab

Sample Output

a2b2c3
abab

*/



let fs = require("fs");
let data = fs.readFileSync('input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function letter(word,char){
    
    let count=0;
    for(let i=0;i<word.length;i++){
        if(word[i]===char){
            count++;
        }
        else{
            break;
        }
    }
    return count;
  
}

function answer(word){
    let ans=[];
    let len=word.length;
    while(word.length!=0){
        let x=letter(word,word[0]);
        if(x<=1){
            //console.log(word[i],x);
            ans.push(word[0])
            word.splice(0,1);
        }else{
            ans.push(word[0]+x)
            word.splice(0,x);
        }
        
        
    }
    console.log(ans.toString().split(",").join(""))
}

let t=parseInt(readLine());
//console.log(t);



for(let i=0;i<t;i++){
    let word=readLine().split("");
    
    answer(word);
}