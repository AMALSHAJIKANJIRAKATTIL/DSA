let fs = require("fs");
let data = fs.readFileSync('stars.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function countstars(len,stars){
    let map=new Map();
    let set=new Set();
    let sum=0;
    for(let i=0;i<len;i++){

        if(set.has(stars[i])){
            map.set(stars[i],map.get(stars[i])+1)
        }else{
            map.set(stars[i],0)
            set.add(stars[i])
        }

        /*if(map.has(stars[i])){
            
            
            map.set(stars[i]+i,map.get(stars[i])+1);
            map.set(stars[i],map.get(stars[i])+1);
            
        }else{
            map.set(stars[i],0);
            
            
        }*/
    }
    console.log(map)
    console.log(set)
   // return sum;
}

let t=parseInt(readLine())


for(let i=0;i<t;i++){

    let len=parseInt(readLine());
    let stars=readLine().split("");
    console.log(countstars(len,stars))

}