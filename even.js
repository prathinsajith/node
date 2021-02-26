var read=require('readline-sync')

var value=read.question('enter the limit number  ')
// var value2=read.question('enter the limit number  ')

for(i=0; i<=value; i=i+2)
{
   console.log(i)
}