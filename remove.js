let a = [23,34,56,21,21,56,78,23,34];
let b = [];
let len = a.length;
 
for(var i =0;i<len ; i++){
    if(b.indexOf(a[i]) === a[i]){
        b.push(a[i]);
    
    }
}
 console.log(a);
console.log(b);
// console.log(`Number that was repeted was ${}`)