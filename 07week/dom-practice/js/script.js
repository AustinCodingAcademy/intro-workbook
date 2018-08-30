'use strict';
let totalListItems = 0
let numDisplayed = -1; 

document.addEventListener("DOMContentLoaded", function(event) {
  let actualListItems = document.querySelectorAll('li');
  

  totalListItems = actualListItems.length;
  


  numDisplayed = numberInShoppingCart();
  document.querySelector('ul').insertAdjacentHTML('afterend', "<input id='enterText' type='text' value=''>")
  document.querySelector('input').insertAdjacentHTML('afterend', "<input class='submitButton' type='submit' value='Add Item' onclick=addItem()>")
  
  reindexDeleteButtonsHack();
});

function addItem(){
  let addItemText = document.getElementById('enterText').value;
  document.querySelector("ul").insertAdjacentHTML("beforeend",'<li>'+addItemText+'</li>')
  totalListItems+=1
  numDisplayed = numberInShoppingCart();
  addRemoveButton(document.querySelector('ul').lastChild,totalListItems-1);
}

function numberInShoppingCart(){
  let outputString = ''
  outputString = "You have " + totalListItems + " items in your shopping cart";
  if (numDisplayed ==-1){
    outputString = "You have " + totalListItems + " items in your shopping cart";
    document.querySelector('h1').insertAdjacentHTML('afterend', "<h2> "+ outputString + "</h2>")
  }
  else{
    document.querySelector('h2').innerText = outputString = "You have " + totalListItems + " items in your shopping cart";

  }
  return totalListItems;
}

function addRemoveButton(theItem,theIndex){
  theItem.insertAdjacentHTML('beforeend', "  <input class='removeButton' type='submit' value='x' onclick=removeItem("+theIndex+")>");

}

function reindexDeleteButtonsHack(){
  let actualListItems = document.querySelectorAll('li');

  let stupidFuckingButtons = document.querySelectorAll(".removeButton");
  for(let godDamnCounter = 0 ; godDamnCounter<stupidFuckingButtons.length;godDamnCounter++){
    stupidFuckingButtons[godDamnCounter].remove();
  }
  for(let i = 0; i<actualListItems.length;i++){
    addRemoveButton(actualListItems[i],i);
  }
  
}


function removeItem(theIndex){
  let actualListItems = document.querySelectorAll('li');
  actualListItems[theIndex].remove();
  totalListItems--;
  numberInShoppingCart()
  reindexDeleteButtonsHack();
}