// var arr = [1,2,3,4,10,11];
arraySum([1,2,3,4,22]);
function arraySum(arr){
    var i,sum = 0;
    var len = arr.length;
        for(i=0;i<len;i++){
            sum = sum + arr[i];
            return sum;
            }
            console.log(sum);
        }
