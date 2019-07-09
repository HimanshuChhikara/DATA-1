diamond(5)
function diamond(n){
    var i,j;
    var space = n-1;
    for(i=0;i<n;i++){
        for(j=0;j<space;j++){
            process.stdout.write(" ");
        }
        for(j=0;j<=i;j++){
            process.stdout.write("*");
        
        console.log();
        // space--;
    }
}
}
//     space =0;
//     for(i=n;i>0;i--){
//         for(j=0;j<space;j++);
//         process.stdout.write(" ");
//         for(j=0;j<i;j++){
//             process.stdout.write("*");
//             space++;
//         }
//         console.log();
//     }
//     }
// }
