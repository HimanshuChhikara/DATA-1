 prime(11);

function prime(n){

    var flag = 0;

    for(var i =2;i<=n/2;i++){
        if(n%i == 0){
            flag = 1; 
            break;
        }
    }
    if(flag == 1){
        console.log("Number is not a prime");
    }
    else{
        console.log("Number is prime");
    }
}
var result = reverse();
// console.log(result);

function reverse(){
var remender,temp, final = 0;
var number = 112211;
temp = number;
while(number>0){
    remender = number%10;
    number = parseInt(number/10);
    final = final *10 +remender;

}
if(final==temp){
    return ("It is a palindrome");
}
else {
    return ("Not a palindrome");
}
}

