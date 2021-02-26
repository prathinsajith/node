
let dateStart= new Date()
console.log('Task Started')

function longTask(ms){
    let dateStartFn= new Date()
        while(new Date-dateStartFn <= ms){
        }     
}
for(i=1; i<=5; i++){
    let sign = '*'
    for(j=1; j<i; j++) {
        sign+='*'
    }
    longTask(1000)
    console.log(sign + '\t'+ i);
}

longTask(5000)
console.log('Task Ended')
let dateEnd = new Date()-dateStart
console.log(dateEnd)

console.log('Task Started')
longTask(1000)
console.log('Task Ended')
