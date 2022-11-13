/*
You are moving to a different country and you want to sell your car. You bought your car for 10,00,000 Rs (10 Lakhs). You are not willing to sell the car if the customers offer you less than 90% of what you paid. You have customers lined up offering you what they are willing to pay and you have to come up with the list of customers who you can sell your car to. Each customer will submit one proposal.
Design a class CarSell which has 1 method.
getPromisingCustomers -- This method should get the indices of all the customers whose proposals are greater than or equal to 90% of the car value.
If all the customers are only willing to pay less than 90%, print -1

Input:

3
1000000
100000


Output:

0
2

*/


let fs = require("fs");
let data = fs.readFileSync('carsell.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class carsell{
    constructor(prices){
        this.arr=prices;
    }
    getPromisingCustomers(){
        for(let i=0;i<arr.length;i++){
        if(this.arr[i]>=900000){
            ans.push(i);
        }}
        return ans;
    }
}

let x=parseInt(readLine());
let ans=[];
let arr=[];
for (let i=0;i<x;i++){
    arr[i]=parseInt(readLine());
}
let prices=new carsell(arr);
ans=prices.getPromisingCustomers();
if(ans.length===0){
    console.log(-1)
}else{
    console.log(ans.toString().split(',').join('\n'))
}

