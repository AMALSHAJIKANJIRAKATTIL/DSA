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
let t=parseInt(readLine());
let alphabet=['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a']

for(let i=0;i<t;i++){
    
    let v=parseInt(readLine());

    if(v>26){
        let b=v%26;
        v=Math.floor(v/26);
        if(b===0){
            b=26;
            v=v-1;
            console.log(alphabet[v-1].toUpperCase()+alphabet[b-1].toUpperCase());
        }
        else{
        console.log(alphabet[v-1].toUpperCase()+alphabet[b-1].toUpperCase());
        }
    }else if(v>0){
    console.log(alphabet[v-1].toUpperCase());
    }
}