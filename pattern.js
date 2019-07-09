
pattern(5);

function pattern(a){
    for(var i=1;i<=a;i++){
        for(var j=1;j<=a;j++){
            if(j>=3){
                process.stdout.write("*");
            }
            else{
                process.stdout.write(" ");
            }
        }
         console.log();   
    }

}

// function star(a){
//     for(var i=1;i<=5;i++){
//         for(var j=1;j<=5;i++)
//         if(j>=i){
//             console.log("*");
//         }
//         else{
//             console.log("")
//         }
//     }
// }