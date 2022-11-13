let fs = require("fs");
const { abort } = require("process");
let data = fs.readFileSync('median.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function median(arr){
    let sort=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
        sort.push(arr[i][j])
        }
    }
    for(let i=0;i<sort.length-1;i++){
		let min=i;
		for(let j=i+1;j<sort.length;j++){
			if(sort[j]<sort[min]){
				min=j;
			}
		}
		let temp=sort[min];
		sort[min]=sort[i]
		sort[i]=temp;
	}
    
    let mid=0;
    if(sort.length%2!=0){
        mid=Math.floor(sort.length/2);
        return sort[mid]
    }else{
        mid=sort.length/2;
        return Math.floor((sort[mid]+sort[mid-1])/2)
    }
    
    
}



let t=parseInt(readLine());

while(t>0){
    let [m,n]=readLine().split(" ").map(Number);
    let arr=[]
    for(let i=0;i<m;i++){
        arr[i]=readLine().split(" ").map(Number);
    }
    console.log(median(arr))
    t--;
}
