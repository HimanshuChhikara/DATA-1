var A =[21,43,56,43,23];
reverse();
for(var i=0;i<A.length;i++)
{
    console.log(A[i]);
}  



function reverse(){
    var temp;
for(let round=0;round<A.length-1;round++){
    for(var i=0;i<A.length-round-1;i++)
    {
        if(A[i]<A[i+1]){
            temp = A[i];
            A[i] = A[i+1];
            A[i+1] = temp;
            }
        }
    }
}