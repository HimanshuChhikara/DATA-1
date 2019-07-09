var arr=[1,2,3,5];
var result = number();
console.log(result);
function number(arr,n){
// var arr=[1,2,4,5];
    var i ,total =1,n=arr.length;
    total = n*(n+1)/2;
for(i=2;i<=n+1;i++){
    total+=i;
    total-=arr[i+2];

return total;
}
}
// var Number=[15,24,12,32,43,23];
// var result = Number.sort();
// Number.push(20);
// Number.push(333);
// Number.pop(23);
// console.log(Number);
// console.log(result);
// var a = [6], count = 4;
// var missing = new Array();

// for(var i=1;i<=count;i++) {
//     if(a.indexOf(i) == -1){
//         missing.push(i);
//     }
// }
// console.log(missing); 