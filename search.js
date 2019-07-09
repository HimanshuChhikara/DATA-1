let array=[122,12,13,421,12,12,13,421,12,122,12,12];
var numberTObeSearched;
let result = searchNumber(array,12);
// console.log(result);
if(result.length > 0){
    console.log("number found at positions",result);
    console.log("number found times",result.length);
}else{
    console.log("number not found");
}
function searchNumber(array,numberTObeSearched){

    var temp = 0;
    let position=[];
    
    for(i=0;i<array.length;i++){
    // var value = array[i]==numberTObeSearched;
        if(array[i]==numberTObeSearched){
            position[temp] = i;
            temp ++;       

        }
    }

    return position;
}