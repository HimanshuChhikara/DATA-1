fibonacci (10);
function fibonacci(num){

var a = 0;
var b = 1;
var c;
for(i=3;i<=num;i++){
    c = a + b;
    // console.log(c);
    a = b;
    // console.log(a);
    b = c; 
    // console.log(b);
}
// console.log(c);
}
