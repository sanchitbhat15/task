//GET ELEMENTS BY TAG NAME
var li =document.getElementsByTagName('li')
  console.log('li');
  for(var i=0; i < li.length; i++)
  {
    li[i].style.backgroundColor ='#f4f4f4';
  }
//Able to edit with TAGname

//GET ELEMENTS BY CLASS NAME
var items =document.getElementsByClassName('list-group-item');
  for(var i=0; i < items.length; i++)
  {
    items[i].style.backgroundColor ='#f4f4f4';
  }
//Not able to edit with classname as the 5th li tag is does not have same class as the above.
