arr = [1,2,3,4,8,7,5]
// missingNumber(arr,n);
var n=arr.length;
var result=missingNumber(arr,n);
console.log(result);

function missingNumber(arr,n){
// var n=arr.length;
var total = (n+1)*(n+2)/2;
    for(var i=0;i<n;i++)
        total-=arr[i];
        return total;
}