function reverseword(str){
   return str.split("").reverse().join('')
}



function reversestring(str){
    let arr=str.split(" ")
    
    let ans=''
    for(let i=0;i<arr.length;i++){
        ans+=reverseword(arr[i])+" "
    } 
    return ans
}


console.log(reversestring("Welcome to this Javascript Guide!"))