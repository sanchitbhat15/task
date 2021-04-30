var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//add item
function addItem(e){
e.preventDefault();

//get input value
var newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li');
//add class
li.className = 'list-group-item';
//add textnode with input value
li.append(document.createTextNode(newItem));
//create del button element
var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);
//append li to list
itemList.appendChild(li);
}
//remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('Are you sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);

    

  }
}
}