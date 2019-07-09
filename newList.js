class list{
    constructor(head,next){
        this.head = head;
        this.next = null;
    }
}

const linkedListNode = new list(122);
linkedListNode.next = new list(21);
linkedListNode.next.next = new list(211);
console.log(linkedListNode);

