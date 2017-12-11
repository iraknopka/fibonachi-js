const maxNum = Number(prompt('enter your number'));
 
 function fibLoop(maxNum) {
     let prev = 1;
     let prePrev = 1;
  for ( let i = 3; i <= maxNum; i++) {
      let next = prePrev + prev;  
      prePrev = prev;
      prev = next;
    }
     return prev;   
}
document.write('result:'+fibLoop(maxNum));
 
 function recursion (maxNum) {
    if (maxNum <= 1) 
        return maxNum;
    else {
      return recursion (maxNum-1)+ recursion(maxNum-2);
        }
}
document.write('result:' + recursion(maxNum));
 
 function array(maxNum){
     
      let fibo = [1, 1];
      for ( let i = 3; i <= maxNum; i++){
       fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
      }
       return fibo[fibo.length-1];
}
 document.write('result:'+ array(maxNum));
 

 
 






 
 
  

 
 
  
  















