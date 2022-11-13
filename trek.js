/*

TREK
You went on a trek with HEC(Himalayan Explorers' Club). The trek was to a very beautiful place known as Valley of Flowers'.

For each step you took on the trek, you noted it down as U for Upward and D as Downward. (

Assume, these are the only two possible types of steps possible on the trek.
Trek/Hike always start and end at sea level, and each step up or down represents a unit change in altitude.
A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

*/


let fs = require("fs");
let data = fs.readFileSync('trek.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let test=parseInt(readLine())

for(let i=0;i<test;i++){


    let steps=parseInt(readLine())
    let values=readLine().split("");
    let sum=0;
    let valleys=0;
    for(let j=0;j<steps;j++){
        if(values[j]==='U'){
            sum=sum+1;
        }else if(values[j]==='D'){
            sum=sum-1;
        }

        if(sum===-1){
            if(values[j+1]==='U'){
                valleys++;
            }
        }
    }
    console.log(valleys)
}


