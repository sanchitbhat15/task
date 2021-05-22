//WAP to print hello world
console.log('Hello World');

//WAP to created a linked list class in javascript 


class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head= null;
        this.size=0;
    } 
add(element) {
    var node = new Node(element);

    var current;

    if(this.head== null)
    this.head=node;
    else{
        current= this.head;

   while(current.next) {
    current = current.next;
     
   }
   current.next= node;
    
}
this.size++;
}
addAtFront(element) {
    var node = new Node(element);
    var current;
    if(this.head == null) {
        this.head = node;
    }
    else {
        current = this.head;
        node.next = current;
        this.head = node;
    }
    this.size++;
}
 printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str); 
 }
 removeFrom(index) {
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;
        if (index === 0) {
            this.head = curr.next;
        } else {
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
        return curr.element;
    }
}
}
//Insert an element at last.
var li = new LinkedList();
li.add(10);
li.add(30);
li.printList();
li.addAtFront(55); //Insert an element at the front.
li.printList();
li.removeFrom(2);//Delete an element.
li.printList();
console.log(li.size);//Get the length of the list.





