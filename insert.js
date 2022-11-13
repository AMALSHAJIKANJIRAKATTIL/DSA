let fs = require("fs");
let data = fs.readFileSync('insert.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


let [m,n]=readLine().split(' ').map(Number)


let arr=readLine().split(" ").map(Number)


for(let i=0;i<m;i++){
    if(n<=arr[0]){
        arr.splice(0,0,n);
        break;
    }else if(n>=arr[m-1]){
        arr.splice(m,0,n);
        break;
    }else if(arr[i]>=n){
        arr.splice(i,0,n);
        break;
    }
}
console.log(...arr)