/*
   #
  ##
 ###
#### 

*/


let fs = require("fs");
let data = fs.readFileSync('ladder.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());
let count=1;

for(let i=1;i<=n;i++){
    
    for(let j=0;j<n-i;j++){
        process.stdout.write(" ")
    }
    for(let x=0;x<i;x++){
        process.stdout.write("#")
    }
    console.log()

}
