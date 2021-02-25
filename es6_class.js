class test{
    constructor(num1,num2){
        this.num1 = num1
        this.num2 = num2
    }
    test(){
        console.log('the total sum is ' + (this.num1 + this.num2))
    }
}
let value = new test(10,5)
value.test()
