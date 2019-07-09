diamond(5);
function diamond(n){
    var i,j;
    var k = 4;
    for(i=0;i<n;i++){
        for(j=0;j<k;j++){
            process.stdout.write(" ");
        }
        for(j=0;j<=i;j++){
            process.stdout.write("*");
        }
        console.log();
        k--;
    }
    return 0;
}