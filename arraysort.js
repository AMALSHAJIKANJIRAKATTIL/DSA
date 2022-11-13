let fs = require("fs");
let data = fs.readFileSync('input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


////////////////////

let arr1=readLine().split(" ").map(Number);


let m=parseInt(readLine());
let arr2=readLine().split(" ").map(Number);
let n=parseInt(readLine());
//console.log(arr1,arr2,m,n);

for(let i=0;i<n;i++){
    
    for(let j=0;j<arr1.length;j++){
        if(arr2[i]<arr1[j]){
            arr1[m]=arr1[j];
            arr1[j]=arr2[i];
            m++;
            continue;

        }else{
            console.log(arr1[j])
        }
    }

}
console.log(arr1)