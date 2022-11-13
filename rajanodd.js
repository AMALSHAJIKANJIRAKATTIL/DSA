/**
 * Rajan is odd *
 
Description
Given an array of numbers of size (2*n+1).Raja is unable to find the number which is present odd number of times.It is guaranteed that only one such number exists.Can you help Raja in finding the number which is present odd number of times?

Input
First line contains value of n. Second line contains (2*n+1) array elements.

Output
Print the required number.

Example
Input:

2

1 2 3 2 1

Output:

3
 */

let fs = require("fs");
let data = fs.readFileSync('rajan.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


let n=parseInt(readLine());

let arr=readLine().split(" ").map(Number);

let map=new Map();

for(let i=0;i<(2*n)+1;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}

for(let val of map.keys()){
    if(map.get(val)%2!=0){
        console.log(val);
       break;
    }
}

