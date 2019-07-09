 let arr = [16,17,4,3,19,2];
var n = arr.length;
var result=leader(arr,n)
console.log(result);

function leader(arr,n){
// var arr = [16,17,4,3,5,2];
// var n=arr.length;   
var i ,j;
for(i=0;i<n;i++){
    for(j=i+1;j<n;j++)
 {   if(arr[i]<arr[j])
    // break;
    console.log(arr[j]);
    break;
}
if(j==n){
     console.log(arr[i]);
    
}
// return
}
}
// return;
