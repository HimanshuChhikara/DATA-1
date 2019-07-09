

function largest(str){
    var strSplit = str.split(' ');

    var max =0;
    for(var i=0;i < strSplit.length; i++){
    if(strSplit[i].length > max){
        max = strSplit[i].length;
    }
}
 return max;   
}
var result = largest("This is a cat");
console.log(result); 

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//   var result =findLongestWord("This is a cat");
//   console.log(result);