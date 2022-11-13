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

let x=parseInt(readLine());
sum=0;
for(let i=1;i<=x;i++){
    sum+=i*i;
}
console.log(sum);