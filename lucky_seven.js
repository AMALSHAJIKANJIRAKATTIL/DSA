
/*
Lucky Sevens

Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7

*/

function luckyseven(arr){
    let bool=false;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i===j){continue;}
            for(let x=0;x<arr.length;x++){
                if(j===x){
                    continue;
                }
                if(arr[i]+arr[j]+arr[x]===7){
                    bool=true;
                    break;
                }
            }
        }
    }
    return bool;

}



console.log(luckyseven([1,6]))