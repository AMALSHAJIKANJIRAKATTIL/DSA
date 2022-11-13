let fs = require("fs");
let data = fs.readFileSync('rotate.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let m=parseInt(readLine())
let arr=[];

for(let i=0;i<m;i++){
    arr[i]=readLine().split(' ');
}

console.log(arr[0].length)
for(let i=0;i<arr[0].length;i++){
    let line=''
    for(let j=m-1;j>=0;j--){
        line+=arr[j][i]+' '
    }
    console.log(line)
}