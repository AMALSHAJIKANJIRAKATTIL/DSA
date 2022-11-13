let fs = require("fs");
let data = fs.readFileSync('halfsort.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


 let str=readLine().split("")

 let len=0;
let swap=false;
 if(str.length%2===0){
    len=str.length/2;
 }else{
    len=Math.floor(str.length/2)
 }
do{
    swap=false;
for(let i=len;i<str.length-1;i++){
    if(str[i]>str[i+1]){
        let temp=str[i];
        str[i]=str[i+1];
        str[i+1]=temp;
        swap=true;
    }
}

}while(swap)

console.log(str.join(""))