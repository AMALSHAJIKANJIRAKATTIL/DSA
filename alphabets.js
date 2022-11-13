/*Excel Columns
In a parallel universe, there is a new system of english alphabets. It has 26 letters. The letters are reverse of that of actual english.

They are as follows:

Z, Y, X, W, .... , D, C, B, A

Find the excel title corresponding to the given column number, in this system of alphabets.

In this universe's excel title format 1st column is Z, 2nd column is Y ..... 26th column is A, 27th column is ZZ, 28th column is ZY and so on
*/



let fs = require("fs");
let data = fs.readFileSync('alphabet.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function getAlpha(n){
    return String.fromCharCode(90-n);
}

let t=parseInt(readLine());

while(t--){

    let n=parseInt(readLine());
    n-=1;
    let col='';
    while(n>=0){
        let mod=n%26;
        col+=getAlpha(mod);
        n= parseInt(n/26);
        n-=1;
    }
    console.log(col.split("").reverse().join(""));
}