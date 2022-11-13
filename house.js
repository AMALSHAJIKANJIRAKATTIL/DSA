/*
--Average household income--
Description
You are given a survey of families in a neighbourhood. The survey contains two lists: one contains income of each household, another contains number of children in the household. Find the average income for households with more than 2 children.

Input format
First line contains n, n > 0, denoting the number of households. It is followed by 2n lines, containing one integer each. First n integers are the incomes of households and the next n integers are the number of children in each of the corresponding households.

Output format
One positive integer, which is the average income of the households that have more than 2 children. If the result is float, return its floor. If there is no household with more than 2 children, return -1.
*/ 


let fs = require("fs");
let data = fs.readFileSync('house.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


let n = parseInt(readLine())
let count=0;
let sum=0;
let sal = []
let child = []

for (let i = 0; i < n; i++) {
    sal[i] = parseInt(readLine())
}

for (let i = 0; i < n; i++) {
    child[i] = parseInt(readLine())
}

for (let i = 0; i < n; i++) {

    if (child[i]>2){
        count++;
        sum+=sal[i];
    }
}

if(count===0){
    console.log(-1)
}
else{
    console.log(Math.floor(sum/count))
}