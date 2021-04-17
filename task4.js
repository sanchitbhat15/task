//QUERYSELECTOR
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor ='green'; //Make the 2nd item have green background color

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.backgroundColor ='white'; 
thirdItem.style.color = 'white'; //Make the 3rd item invisible

//QUERYSELECTORALL
var li  = document.querySelectorAll('li');
console.log(items);
li[1].style.color = 'green'; //Using QuerySelectorALL change the font color to green for 2nd item in the item list

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++)
{
  odd[i].style.backgroundColor = 'green'; //Choose all the odd elements and make their background green using QuerySelectorALL﻿

}

//The difference between querySelector() and querySelectorAll() is that querySelector() returns a single object with the first HTML element that matches the 'selectors', but querySelectorAll() returns an array of objects with all the HTML elements that match the 'selectors'.
