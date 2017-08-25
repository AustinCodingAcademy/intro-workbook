'use strict';
// document.addEventListener('DOMcontentloaded', function() {

window.onload = function () {

  // Title changed.
  console.log(document.title = 'Manipulating the DOM!');

  // h3 tag added.
  document.querySelector('body').insertAdjacentHTML ('beforebegin', '<h3>Title has been changed!</h3>');

  // Alert the user in JavaScript Console how many list items there are on the page.
  console.log(document.querySelectorAll ('li').length);



  //Remove 'Paragraph 4'.
  document.querySelector ('#P4').remove();
  document.querySelector ('#div').insertAdjacentHTML ('beforeend', '<h4>Paragraph 4 has been removed!</h4>');

  //Add 'Fifth List Item' to the list.
  document.querySelector ('ul').insertAdjacentHTML ('beforeend', '<li>Fifth List Item</li>');


  // Trying differernt queries. Adding multiple li's.
  const items = ['Sixth Element', 'Seventh List Item', 'Eight List Item', 'Nineth List      Item'];
  for (let i = 0; i < items.length; i++) {
    document.querySelector ('ul').insertAdjacentHTML ('beforeend', `<li>${items[i]}</li>`);
  }


  document.querySelector ('#P1').insertAdjacentHTML ('beforeend', '<ol><li>List Item A</li></ol>');
  //
  // })
}
