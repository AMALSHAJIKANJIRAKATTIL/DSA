let fs = require("fs");
let data = fs.readFileSync('pal.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let txt=readLine().split("");
let length=txt.length;
let bool=false;
if(length===1){
    bool=true;
}else{
for(let i=0;i<Math.floor(length/2);i++){
    let b=txt.pop();

    if(txt[i].toLowerCase()===b.toLocaleLowerCase()){
        bool=true;
    }else{
        bool=false;
        break;
    }
}
}
if(bool){
    console.log("YES");
}
else{
    console.log("NO");
}