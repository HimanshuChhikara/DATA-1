// 
//  positions = [12,13,14,1,4,5,2];
//  var a = positions.sort();
//  console.log(a);
// function myFunction(){
//     positions.sort(function(a,b){return a-b})

// }
// var result = myFunction();
// console.log(result);
 // console.log(positions);
// positions.splice(2,4);
// console.log(positions);
// positions.shift();
// console.log(positions);
// var matrix =[];
// for(var i=0;i<3;i++){
//     matrix[i]=[];{
//     for(var j=0;j<3;j++){
//     matrix[i][j]=[];
//     for(var k=0;k<3;k++)
//     matrix[i][j][k]=i+j+k;
// }
// }
// }
// console.log(matrix);
// var str = 121;
// let result = number();
// console.log(result);
// var result = number();
// var result = number(121);
// console.log(result);


// function number(n){
//     n=n+"";
//     n= n.split("").reverse().join("");
//     if(output==n){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
    // console.log(number(3123));
    // var numb = str.split("").reverse().join("");
    // if(numb==str)
    // {
    //     return true;
    // }

    // else{
    // return false;
    // }
//}



// function palindrome(){
//     revers = str.split("").reverse().join("");
//     if(str==revers){
//         return true;
//     }
//     else
//     return false;
    
    
// }
// var number = 1221;
var result = reverse();
console.log(result);

function reverse(){
var remender,temp, final = 0;
var number = 1121;
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