multip([2,3,4,5,6]);
// function multip(arr){
//     var temp = [];
//     var len = arr.length;

//     temp[0]=arr[0]*arr[1];
    
//     for(var i =1;i<len-1;i++){
//         temp[i]= arr[i-1]*arr[i+1];
        
//     }
//     temp[arr.length-1]=arr[arr.length-1]*arr[arr.length-2];
//     console.log(temp);
// }

function multip(arr){
    var len = arr.length;
    var current;
    var previous = arr[0];
    arr[0]= arr[0]*arr[1];
    for(var i = 0;i<len-1;i++){
        current=arr[i];
        arr[i]= previous * arr[i+1];
        previous = current;
    }
    arr[len-1] = previous * arr[len-1];
    console.log(arr);
}