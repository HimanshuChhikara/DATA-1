pattern();

function pattern(){
    for(var i=1;i<=6;i++){
        for(var j=1;j<=6;j++){
            if(j>=i){
            process.stdout.write("*");
            }
            else
            
                console.log("");
            

        }
        console.log();   
    }

}
