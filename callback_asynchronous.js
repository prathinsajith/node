 
function longTask(milliSecond){
    startTime = new Date()
    while(new Date -startTime < milliSecond){

    }
}

function end(){
    console.log('End')
}

console.log('started')
setTimeout(end,3000)

console.log('started')
setTimeout(end,3000)

console.log('started')
setTimeout(end,3000)