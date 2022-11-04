

//vowels word 

var input = "mugeshkumar";
var input2 = "sakthi";

var count = 0;
for(let i=0; i<input.length; i++){
  if(input[i]=="a" ||input[i]=="e" ||input[i]=="i" ||input[i]=="o" ||input[i]=="u" ){
                  count ++;
       }
}
console.log(count);
var count2 = 0;
for(let i=0; i<input2.length; i++){
  if(input2[i]=="a" ||input2[i]=="e" ||input2[i]=="i" ||input2[i]=="o" ||input2[i]=="u" ){
              count2 ++;  
      }
}
console.log(count2);

if(count>count2){
  console.log(input);
}else if(count<count2){
  console.log(input2);
}else{
  console.log(input,input2);
}
