var array = [1,3,5,7,9,11,,11,12];
var binary =binarySearch(array,11);
if(binary > 0){
    console.log("result found at position",binary);
}
else{
    console.log("result not found");
}

function binarySearch(array,x){
    var low =0 , high =array.length-1 , mid;
    while(low<=high)
    {
        mid = Math.floor(low+high)/2;
        if(array[mid]==x)
        return mid;
        else if(array[mid]<x)
        low = mid +1;
        else high = mid -1;
    }
 return -1;

}
// function binarySearch(array,x)
// {
//     var startIndex ,endIndex,length;
//     startIndex = 0;
//     endIndex = array.length-1;
//     let midIndex = Math.floor(startIndex+endIndex)/2;
//     // console.log(array[midIndex]);
//     while(startIndex <= endIndex && array[midIndex]!=x){
//         if(x<array[midIndex])
//         endIndex = midIndex-1;
//         else 
//         startIndex =midIndex+1;
//         midIndex = Math.floor(startIndex+endIndex)/2;
//     }
//     if(array[midIndex]==x){
//         length = midIndex;
//     }
//         else
//         length = -1;
//     }
    
//     // if(array[midIndex]==x){
//     //     return console.log("TARGET FOUND");
//     // }
//     // if(array[midIndex] < x){
//     //     console.log("Searching in left side");
//     //     endIndex = midIndex - 1;

//     // }
//     // else
//     // console.log("Not found in first loop");



