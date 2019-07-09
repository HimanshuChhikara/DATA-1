function merge (left, right) {
    let resultArray= [], leftIndex = 0, rightIndex = 0;
  
    
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; 
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; 
        }
    }
    return resultArray 
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
var result = merge([2,4,5,6,7],[3,5,7,8,11])
console.log(result);  
// var a =[1,2,10,14,21];
// var b =[12,32,54,65,76];
// var result = mergeSort(a,b);
// console.log(result);


// function mergeSort(a,b){
//     for(var i=0;i<b.length;i++){
//         a.push(b[i]);
//     }
//     for(i=0;i<a.length;i++){
//         for(var j=j+1;j<a.length;j++){
//             if(a[i]>a[j]){
//                 temp = a[i];
//                 a[i]=a[j];
//                 a[j]=temp;
//             }
//         }
//         return a;
//     }

// }