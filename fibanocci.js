let fs = require("fs");
let data = fs.readFileSync('fib.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let x=parseInt(readLine());
let fib=0;
if(x<=0){
    console.log(-1)
}
else if(x>3){
    let fibinocci=[0,1];
    for(let i=2;i<x;i++){
        fibinocci.push(fibinocci[i-1]+fibinocci[i-2]);
    }
    console.log(fibinocci.toString().split(',').join('\n'))
}
else{
    for(let i=1;i<=x;i++){
        console.log(fib);
        fib++;
        if(i===2){
            fib=1;
        }
    }
}