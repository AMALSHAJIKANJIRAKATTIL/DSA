/**
 * Sports Stats
Max likes football very much. In order to check the popuplarity of the game, he decided to talk to random people and ask them about their favourite game and note it down in a list.

Given a list of name of people and their favourite sport, help Max in finding the sport liked by most of the people, and also how many people like football.

He could have met same people more than once, he will only count response of his first meet with any person.

Note : Name of person as well as sport is a single string in lowercase. Length of name of people as well as sport is less than 11.

Input
First line will contain no of entries in the list. i.e. N Next N lines will contain two strings, person's name and sports he like.

Output
In first ine, name of sport liked by most no of people (In case of more than one games is liked by highest no of people, output the first one in lexicographical order). In second line, no of people having football as their favourite game.

Example
Input:

7

abir cricket

aayush cricket

newton kabaddi

abhinash badminton

sanjay tennis

abhinash badminton

govind football

Output:

cricket

1

Explanation
2 people likes cricket, ans so it liked by maximum people. 1 person has football as his favourite sport
 */


let fs = require("fs");
let data = fs.readFileSync('input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine());
let arr=[];
let name=[];
let sport=[];
let map=new Map()
for(let i=0;i<n;i++){  //input
    arr[i]=readLine().split(' ')
    name[i]=arr[i][0]
    sport[i]=arr[i][1]
}
for(let i=0;i<n;i++){    //Removing repeated names and value
    if(map.has(name[i])){
        continue;
    }else{
        map.set(name[i],sport[i])
    }
}
let set=new Set(name);
let ans=new Map();
for (let val of set.values()){     //

    if(ans.has(map.get(val))){
        ans.set(map.get(val),ans.get(map.get(val))+1);
    }else{
        ans.set(map.get(val),1);
    }

}

let favsport=[];
for (let key of ans.keys()){
    if(ans.get(key)===Math.max(...ans.values())){
        favsport.push(key);
        
    }

}
favsport.sort(function(a, b) {
    return a.localeCompare(b);
});

for(let i=0;i<favsport.length;i++){
    console.log(favsport[i])
}



if(ans.has('football')){
console.log(ans.get('football'))}
else{
    console.log(0)
}