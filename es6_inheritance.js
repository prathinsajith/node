
class sample{
    sampleTest(){
        console.log("Hello World")
    }
}

class test extends sample{
    constructor(num1,num2){
        super() /*Must call super constructor in derived class before accessing 'this' or returning from derived constructor */
        this.num1 = num1
        this.num2 = num2
    }
    test(){
        console.log('the total sum is ' + (this.num1 + this.num2))
    }
}
let value = new test(10,5)
value.test()
value.sampleTest()