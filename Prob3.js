//printing the value of all the numbers generated in the pyramid pattern

let num=1;
var sum = 0;

for (i=1;i<=6;i++)
{
    
    var text = "";
    for (j=1;j<=i; j++)
    {
        text += num + "";
        sum= num + sum;
        num++;
        
        
       
    }
     
     
     console.log(text);
      
    
}
    console.log(sum);