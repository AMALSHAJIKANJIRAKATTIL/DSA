let fs = require("fs");
let data = fs.readFileSync('sort.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j]
        j = j - 1
      }
      arr[j + 1] = numberToInsert
    }
    return arr;
  }
  
let t=parseInt(readLine())

for(let i=0;i<t;i++){
    let m=parseInt(readLine());
    let arr=readLine().split(' ').map(Number)
    console.log(...insertionSort(arr))
}