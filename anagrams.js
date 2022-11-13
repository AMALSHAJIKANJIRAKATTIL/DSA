let fs = require("fs");
let data = fs.readFileSync('anagram.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


let x=readLine().split("")
let y=readLine().split("")
let bool=false;

if(x.length===y.length){
    for(let i=0;i<x.length;i++){
        if(x[0].toLowerCase()===y[i].toLowerCase()){
            x.splice(0,1)
            y.splice(i,1)
            bool=true;
            i=-1;
          
        }else{
            bool=false;
        }
    }
    if(bool){
        console.log(1)
    }
    else{
        console.log(0)
    }
}
else{
    console.log(0)
}