araayPattern();
function araayPattern(){
    var i,j;
    var arr = [1,1,3,1];
    for(i=0;i<=arr.length;i++){
        // console.log(arr[i]);
        var k= arr[i];
            for(j=0;j<k;j++){
                if(arr[i]!=0){
                    // console.log(arr[j]);
                    process.stdout.write("*");
                    arr[j]=arr[j-1];
                }
                // if(arr[i]!==arr[i])
                // if(arr[i]!=0){
                // if(arr[j]!=0){
                //     arr[j]=arr[j-1];
                // process.stdout.write("*");
            
                }
        }
         console.log();
    }

