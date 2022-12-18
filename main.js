let num=parseInt (prompt("Enter the number"));
let sum=0;
for (let i=num; num!=0; i++){
     sum +=num % 10;   
    num=parseInt(num/10);
   
}
document.write("sum of number is " +sum)

/*while ( num!=0 ){
    sum +=num % 10;   
   num=parseInt(num/10);
  
}
document.write("sum of number is " +sum)*/