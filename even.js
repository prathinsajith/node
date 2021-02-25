var read=require('readline-sync')

var value1=read.question('enter the limit number  ')
// var value2=read.question('enter the limit number  ')

for(i=0; i<value1; i++)
{
    for(j=1; j<=i; j++)
    {
        console.log("&")
    }
}