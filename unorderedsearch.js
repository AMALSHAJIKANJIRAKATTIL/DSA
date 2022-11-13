let fs = require("fs");
let data = fs.readFileSync('array.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let k=parseInt(readLine());
let n=parseInt(readLine());
let arr=[];
bool=false;

for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine());

    if(arr[i]===k){
        bool=true;
        console.log(i);
        break;
    }
}

if(!bool){
    console.log(-1);
}