let fs = require("fs");
let data = fs.readFileSync('inputreader.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class inputreader{

    constructor(){
        this.arr=[];
    }
    stringread(n){
        for(let i=0;i<n;i++){
            this.arr.push(readLine());
            console.log(i,this.arr[i]);
        }
    }
    floatread(n){
        for(let i=0;i<n;i++){
            this.arr.push(parseFloat(readLine()).toFixed(2));
            console.log(i,this.arr[i]);
        }
    }
    intread(n){
        for(let i=0;i<n;i++){
            this.arr.push(parseInt(readLine()));
            console.log(i,this.arr[i]);
        }
    }

}


let n=parseInt(readLine())

let query=readLine()
let read=new inputreader();
if(query.toLowerCase()==='float'){
    read.floatread(n)
}else if(query.toLowerCase()==='string'){
    read.stringread(n)
}else if(query.toLowerCase()==='integer'){
    read.intread(n)
}
