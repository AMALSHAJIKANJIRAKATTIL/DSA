let fs = require("fs");
let data = fs.readFileSync('string.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

///////


let t1=readLine().split("");

let t2=readLine().split("")

for(let i=0;i<t1.length;i++){
    if(t1[i]===t2[0]){
        t2.splice(0,1);

    }else{
        console.log(i);
        break;   
 }
}

if(t2.length!=0){
    //console.log(t1.length)
    console.log(t2[0])
}
else{
   
    console.log(t2)
}