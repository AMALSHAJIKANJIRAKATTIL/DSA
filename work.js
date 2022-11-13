/*
Office

Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars. In a team meeting, a terrible, awful person declares to the group that you aren't working.

You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave. Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'They fired me'. Else return 'I still have a job'.

Happiness rating will be total score / number of people in the room.

Note that if your boss is in the room (boss/Boss), their score is worth double it's face value (but they are still just one person!).
*/


let fs = require("fs");
let data = fs.readFileSync('work.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let names=readLine().split(" ");
//console.log(names);

let ratings=readLine().split(" ").map(Number);
//console.log(ratings);

let ans={};
let sum=0;
for(let i=0;i<names.length;i++){
    if(names[i].toLowerCase()=="boss"){
        ratings[i]=2*ratings[i];
    }
    ans[names[i]]=ratings[i];
    sum+=ratings[i];
}



if(sum/ans.length<=5){
    console.log("They fired me")
}else{
    console.log("I still have a job")
}