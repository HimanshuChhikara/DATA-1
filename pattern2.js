pattern(5,6);

// function pattern(a){
//     let i,j;
//     for(i=1;i<=a;i++){
//         for(j=i;j<=a;j++){
//             process.stdout.write("*");
//         }
//         if(i<a){
//             console.log();
        
//         }
//     }

// }
function pattern(a,b){
    let i,j;
    for(i=1;i<=a;i++){
        for(j=1;j<=b;j++){
            if(j<=i&&j<i+1){
            process.stdout.write("*");
        }
       
        // console.log();
    }

     console.log();
}
}