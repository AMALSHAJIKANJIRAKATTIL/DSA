

let fs = require("fs");
let data = fs.readFileSync('small.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function calcsmall(arr){
    let map=new Map();
    
    for(let i=0;i<n;i++){
        let count=0;
        for(let j=0;j<n;j++){
          if(arr[i]>arr[j]){
            count++;
          } 
        }
        console.log(count)

}

    return map;
}


let n=parseInt(readLine());

let arr=[];

for(let i=0;i<n;i++){

    arr[i]=parseInt(readLine());

}

calcsmall(arr)