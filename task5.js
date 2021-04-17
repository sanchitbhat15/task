var itemList = document.querySelector('#items');

//Parent Node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//PARENT ELEMENT
var itemList = document.querySelector('#items');

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//CHILD NODES
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
console.log(itemList.firstChild);

//FIRST ELEMENT CHILD
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello';

//LAST ELEMENT CHILD
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello';

//Nextsibling
console.log(itemList.nextSibling);

//nextElementsibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement

//Create a div
var newDiv = document.createElement('div');

//Add class
newDiv.className = 'hello';

//Add ID
newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText = document.createTextNode('Hello world');

//Add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';