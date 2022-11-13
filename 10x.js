let fs = require("fs");
let data = fs.readFileSync('10x.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

class report{
    constructor(str){
        
        this.name=str;
        
        this.score=[];
    }
    enter_score(score){
        this.score.push(score)
    }
    get_average_score(){
        let sum=0;
        for(let i=0;i<this.score.length;i++){
            sum+=this.score[i];
        }
        let avg=`${this.name} average score: ${Math.floor(sum/this.score.length)}`;
        return avg;
    }
    get_test_score(i){
        let rply= `${this.name} test ${i} marks: ${(this.score[i-1])?this.score[i-1] : 'NA' }`;
        return rply;
    }
}




let name=readLine();
let rprt=new report(name);

let n=parseInt(readLine());
for(let i=0;i<n;i++){
    rprt.enter_score(parseInt(readLine()))
}

let queries=parseInt(readLine());
for(let j=0;j<queries;j++){
    let query=readLine();
    if(query.toLowerCase()==='average'){
        console.log(rprt.get_average_score())
    }
    else{
        
            let rslt=rprt.get_test_score(parseInt(readLine()));
            
            console.log(rslt)
            
            
        
    }
}
