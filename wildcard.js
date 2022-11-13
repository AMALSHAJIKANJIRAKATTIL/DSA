/**
 * Wild Card
Given a binary pattern that contains ‘?’ wildcard character at few positions, find all possible combinations of binary strings that can be formed by replacing the wildcard character by either 0 or 1.

Note: The resultant strings should be returned in such a way, so that they look like a sorted binary numbers!

Input
Single line input denoting the given string.

Output
Each line containing one string, in the given format.
 */




let fs = require("fs");
const { callbackify } = require("util");
let data = fs.readFileSync('wildcard.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function calc(str){
   
    
    /*let stringset=new Set(str)
    if(!stringset.has('?')){
        
        return
    }*/
    let pos=[];
    for(let i=0;i<str.length;i++){
        if(str[i]==='?'){
            pos.push(i)
        }
    }

    if(pos.length===0){
        ans.add(str.join(''))
        return
    }

    let arr=[0,1];
    for(let i=0;i<str.length;i++){
        for(let x=0;x<pos.length;x++){
        if(pos[x]===i){
            for(let j=0;j<2;j++){
                str[i]=arr[j];
                calc(str)
                str[i]='?'
            }
            
        }
    }
    
    }

}



let str=readLine().split("")

let ans=new Set();





calc(str)

for (let i of ans){
console.log(i)
}