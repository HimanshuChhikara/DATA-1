function node(data){
    this.data = data;
    this.next = null;
}
function linkedList(){
    this_length = 0; 
    this.head = null;
}

linkedList.prototype.add = function(val){
    if(!this.head){
        this.head =node;
        console.log(this);
        this_length +=1;
        return this;
    }
}
var sll = new linkedList();
sll.add(3);
sll.add(2);