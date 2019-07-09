class node{
    constructor(value,next=null) {
        this.value = value;
        this.next = next;    
    }
}

// let newNode = new node('XYZ');
// console.log(newNode);

class list{
    constructor(){
        this.head =newNode('HEAD');
    }
}
find(value) {
    let tmpNode = this.head;

    while(tmpNode.value!==value){
        tmpNode = tmpNode.next;
    }
    return tmpNode;
}
insert(where,value) {
    let  whereToInsert = this.find(where);
    let newNode = new Node(value,whereToInsert.next);
    whereToInsert.next = newNode;
}

print() {
    let tmpNode = this.head;
    while(tmpNode !==null){
        console.log(tmpNode.value);
        tmpNode = tmpNode.next;

    }
}
  
let newList = new list();
newList.insert('head',1);
newList.insert(1,2);
newList.insert(2,3);
newList.print();