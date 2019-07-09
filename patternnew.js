// star(3);
// second();
// // third();
// function star(n){
//     var i,j;
//     for(i=0;i<=n;i++){
//         for(j=0;j<=n;j++){
//             if(j>=3-i){
//                 process.stdout.write("*");
//             }
//             else{
//                 process.stdout.write(" ");
//             }
//         }
//         console.log();
//     }
// }

// function second(){
//     var i,j;
//     for(i=0;i<=2;i++){
//         for(j=0;j<=3;j++){
//             if(i<=j-1){
//                 process.stdout.write("*");
//             }
//             else{
//                 process.stdout.write(" ")
//             }
//         }
//         console.log();
//     }
// }
// // function third(){
// //     var i,j,k=0;
// //     for(i=6;i<9;i++){
// //         for(j=1;j<=5;j++){
// //             if(i<=j-2&&i<j-1){
// //                 process.stdout.write(" ");
// //             }
// //             else{
// //                 process.stdout.write("*");
// //             }
// //         }
// //         console.log();
// //     }
// // }
diamond();

function diamond(){
    var i,j,k=0;
    
    for(i=1;i<=7;i++){
        i<=4?k++:k--;
        for(j=1;j<=7;j++){
            if(j>=5-i&&j<=3+i){
                process.stdout.write("*");
            }
            else{
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}