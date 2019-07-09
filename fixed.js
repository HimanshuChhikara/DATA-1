var a=[-10,-1,0,2,4,10,11,30,50,100];
var n=a.length;
var result=fixed();
console.log(`result found at ${result}`);


function fixed(){
    var i;
    for(i=0;i<=n;i++){
        if(a[i]==i){
            return i;
        }
        // return -1;
    }
}