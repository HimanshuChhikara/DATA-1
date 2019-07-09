var result=palindrome(1211);
console.log(result);
function palindrome(N){
    var reverse,final=0,total;
    total =N;
    while(N>0){
     reverse = N%10;
     N=parseInt(N/10);
     final = final*10+reverse;
    }
    if(final==total){
        return("NUMBER IS PALINDROME");
    }
    // return("not a palindrome");
    else
    return("NOT A PALINDROME");
}
