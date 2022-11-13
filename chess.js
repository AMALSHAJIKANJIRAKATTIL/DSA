let fs = require("fs");
const { moveMessagePortToContext } = require("worker_threads");
let data = fs.readFileSync('chess.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


///////////////

function calcmoves(i,j,n){

    if(n===0){return 0;}
    let arrx=[i+2,i+2,i-2,i-2,i+1,i+1,i-1,i-1]
    let arry=[j+1,j-1,j+1,j-1,j+2,j-2,j+2,j-2]
    n--;
    
    for(let x=0;x<10;x++){
        if(arrx[x]>=0 && arrx[x]<=9 && arry[x]>=0 && arry[x]<=9){

           let possiblepos=arrx[x]+","+arry[x]
            if(n===0){
            map.set(possiblepos,n)
            }
            calcmoves(arrx[x],arry[x],n)
        }
    }
    return map.size

}



let [i,j,n]=readLine().split(" ").map(Number);
let map=new Map();
console.log(calcmoves(i-1,j-1,n))