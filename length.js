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


let x=readLine().split(" ");
len=0;

for(let i=0;i<x.length;i++){
    if(len<x[i].length){
        len=x[i].length;
    }
}
console.log(len);