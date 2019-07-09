patterns(6,6);
function patterns(a,b){
    let i,j,k;
    for(i=1;i<=a;i++){
         k=0;
        for( j=1;j<=b;j++){
            if(j>=6-i&&j<=4+i&&k){
                process.stdout.write("*");
                 k=1;
            }
            else{
                process.stdout.write(" ");
                  k=1;
            }
        }
        console.log();
    }
}