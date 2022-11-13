let fs = require("fs");
let data = fs.readFileSync('budget.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let [budget,keyboard,usb]=readLine().split(" ").map(Number);

let max=[];

let keyarr=readLine().split(" ").map(Number);
let usbarr=readLine().split(" ").map(Number);


for(let i=0;i<keyboard;i++){
    for(let j=0;j<usb;j++){
        if(keyarr[i]+usbarr[j]<=budget){
        max.push(keyarr[i]+usbarr[j])
        }
    }
}
if(Math.max(...max)!=Number.NEGATIVE_INFINITY){
console.log(Math.max(...max))
}else{
    console.log('-1')
}
