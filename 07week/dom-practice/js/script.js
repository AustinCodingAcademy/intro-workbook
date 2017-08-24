'use strict';
/*

Alert the user to how many list items there are on the page.
Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.
Add 'Fifth List Item' to the list.
Remove 'Paragraph 4'.

*/


var $li = document.getElementsByTagName('li');
var $ul = document.querySelector('ul');
var $p = document.getElementById('P4');



alert($li.length);
document.title = 'Manipulating the DOM!';
$ul.insertAdjacentHTML('beforeend', '<li>Fifth List Item</li>');
$p.remove();
