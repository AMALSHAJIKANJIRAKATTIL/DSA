/**
 * Code Words
Description
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Input format
First line contains a positive integer n, denoting the number of test cases. It is followed by n lines. Each of the n lines contains space separated words.

Output format
n lines containing the number of different transformations among all words we have.

Sample input
1
gin zen gig msg
Sample output
2
Explanation
The transformation of each word is:

"gin" -> "--...-."

"zen" -> "--...-."

"gig" -> "--...--."

"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
 */


let fs = require("fs");
let data = fs.readFileSync('code.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function lettercalc(str){
    let morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let letter=str.split("");
    let code='';
    for(let i=0;i<letter.length;i++){
        code+=morse[(letter[i].charCodeAt())-97]
    }
    return code;
}

function wordscalc(arr){
    let morse=[];
    for(let i=0;i<arr.length;i++){
        morse[i]=lettercalc(arr[i]);
        
    }
    return morse;
}

let n=parseInt(readLine());

for(let i=0;i<n;i++){
    let arr=readLine().split(" ");
    let set= new Set(wordscalc(arr));
    console.log(set.size)

}


