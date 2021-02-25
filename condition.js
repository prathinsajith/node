var read=require('readline-sync')

var value1=read.question('enter the First number ')

var value2=read.question('enter the Sec number ')

if (value1 > value2)
{
   console.log( "largest number is " + value1)
}
else if(value1 === value2){
    console.log( "both numbers are equal")
}
else
{
    console.log( "largest number is " + value2)
}
// console.log(value)
