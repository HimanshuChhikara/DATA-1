pyramid();
function pyramid(){
var i,j,k;
for(i=1;i<=6;i++){
    k=1;
    for(j=1;j<=6;j++){
        if(j>=6-i&&j<=4+i&&k){
            process.stdout.write("*");
            k=0;
        }
        else{
            console.log(" ");
            k=1;
        }
        // console.log();
    }
     console.log();
}   

}