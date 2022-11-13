
/*
Special Ops
Coders here is a simple task for you, you have given an array of size N and an integer M. Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

Constraints:
1<=t<=10
1<=n<=1000
1<=a[i]<=1000
Input
First line contains an integer T denoting the number of testcases. First line of every testcase contains two integer N and M. Next line contains N space separated integers denoting the elements of array

Output
For every test case print your answer in new line
*/


let fs = require("fs");
let data = fs.readFileSync('minmax.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


//////////////////////////////
function mincalc(ele,array){
    let arr=[];
    for(let i=0;i<array.length;i++){
        arr[i]=array[i];
    }
    let minsum=0;
    let minval=[]
    for(let i=0;i<ele;i++){
    minval.push(Math.min(...arr))
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    }
    //console.log(minval)
    for(let i=0;i<minval.length;i++){
        minsum+=minval[i];
    }
    //console.log(minsum);
    return minsum;
}

function maxcalc(ele,array){
    let maxarr=[];
    for(let i=0;i<array.length;i++){
        maxarr[i]=array[i];
    }
    let maxsum=0;
    let maxval=[]
    for(let i=0;i<ele;i++){
    maxval.push(Math.max(...maxarr))
    maxarr.splice(maxarr.indexOf(Math.max(...maxarr)),1)
    }
    //console.log(maxval)
    for(let i=0;i<maxval.length;i++){
        maxsum+=maxval[i];
    }
    //console.log(maxsum);
    return maxsum;
}



let t=parseInt(readLine())

for(let i=0;i<t;i++){
    let val=readLine().split(' ').map(Number)
    let arr=readLine().split(' ').map(Number)
    let n=val[0]
    let m=val[1]
    let ele=n-m;
    if(ele<0){
        ele=ele*(-1)
    }
    let min=mincalc(ele,arr)
    let max=maxcalc(ele,arr)
    console.log(max-min)


}