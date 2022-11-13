let fs = require("fs");
let data = fs.readFileSync('matrixsum.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


let m=parseInt(readLine());
let arr1=[]
let arr2=[]
let bool=false;
for(let i=0;i<m;i++){
    arr1[i]=readLine().split(' ').map(Number)
}
let n=parseInt(readLine())
for(let i=0;i<m;i++){
    arr2[i]=readLine().split(' ').map(Number)
    if(arr1[i].length===arr2[i].length){
        bool=true;
    }
    else{
        bool=false;
        break;
    }
}

if(m===n && bool){
    
    for(let i=0;i<m;i++){
        
        let line=''
        for(let j=0;j<arr1[0].length;j++){
            
            line+=(arr1[i][j]+arr2[i][j]).toString()+' ';
            
        }
        console.log(line)
    }
}else{
    console.log('-1')
}