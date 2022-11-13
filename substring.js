let fs = require("fs");
let data = fs.readFileSync('substring.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function longestSubstr(st) { 
    let lastocc = new Map(); 
    let longest = 0; 
    let start = 0; 
    for(let i = 0; i < st.length; i++)
    { 
        if(lastocc.has(st[i])){
    start = Math.max(start, lastocc.get(st[i])) 
    longest = Math.max(longest, (i - start) + 1);
        }
    else{
    start = Math.max(start, 0) 
    longest = Math.max(longest, i - start + 1);
    }
    lastocc.set(st[i], i + 1); 
}
    return longest;
}
    



let n=parseInt(readLine())

while(n!=0){
    let str=readLine()
    n--;
    if(str.length<=0 || !str){
        console.log(0)
    }else{
    console.log(longestSubstr(str.toLowerCase()))
    }
}

