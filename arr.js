var arr =[1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1];

// number(arr);
numb(arr);
function number(arr){
    for(var j=0;j<arr.length;j++){
        var temp =""
        for(var i = 0;i<arr.length;i++){
            if(arr[i] <= 0){
                arr[i] = 0;
            }
            else{
                arr[i]=arr[i]-1
                
            }
            arr[i]=arr[i]-1
            temp = temp +" "+ arr[i]; 
        }   
         console.log(temp);
    }
}

function numb(arr){
    for(var j=0;j<arr.length;j++){
        var temp =" ";
        for(var i = 0;i<arr.length;i++)
        {
            if(j > 0){
                if(arr[i] <= 0){
                    arr[i] = 0;
                }
                else{
                    arr[i]=arr[i]-1;
                    // console.log(arr[i]);
                }
            }
            if(arr[i] > 0){
                temp = temp +"*"; 
            }else{
                temp = temp +" "; 
            }
        }   
         console.log(temp);
    }
}