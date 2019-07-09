var A =[34,23,53,6,1,134];
var accending=bubble_sort();
var decending = reverse();
console.log(accending);
console.log(decending);
 //reverse();
 
 var temp , round;
for(i=0;i<=A.length-1;i++)
{
    console.log(A[i]);

}
function reverse(){
     temp;
    for( round=0;round<A.length-1;round++){
        for(let i=0;i<A.length-round-1;i++){
            if(A[i]<A[i+1]){
                temp = A[i];
                A[i] = A[i+1];
                A[i+1] = temp;      
            }
        }
    }
    return 0;
}

function bubble_sort(){
     temp;

    for( round=0;round<A.length-1;round++){

        for(let i=0;i<A.length-round-1;i++){

            if(A[i] > A[i+1]){
                temp = A[i];
                A[i]=A[i+1];
                A[i+1]=temp;
            }
        }
    }

return 0;
}