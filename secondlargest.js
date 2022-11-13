let fs = require("fs");
let data = fs.readFileSync('secondlargest.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


let n=parseInt(readLine())

let arr=[]

for(let i=0;i<n;i++){
    arr[i]=parseInt(readLine())
}

let firstlargest=Math.max(...arr);
arr.splice(arr.indexOf(firstlargest),1)

let secondlargest=Math.max(...arr)
if(firstlargest===secondlargest){
    for(let i=0;i<arr.length;i++){
        arr.splice(arr.indexOf(firstlargest),1)
        secondlargest=Math.max(...arr)
        if(secondlargest<firstlargest){
            console.log(secondlargest)
            break;
        }
        
    }
    if(firstlargest===secondlargest){
        console.log(secondlargest)
    }
}else{
    console.log(secondlargest)
}
