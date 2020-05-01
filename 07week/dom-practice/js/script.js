"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // You code here
  const list = document.getElementsByTagName("ol")[0];
  const listItems = list.getElementsByTagName("li");

  var listItemCount = getListItemCount();
  // alert("You have " + listItemCount + " items");
  initItems();
  initButtons();
  insertListItemCountMessage();

  /**
   * ========================
   * FUNCTIONS
   * ========================
   */

  /**
   * Function: insertListItemCountMessage()
   * Description: Inserts an H2 directly under page's #main-title displaying
   * a message that tells the user how many items are in shopping cart
   */
  function insertListItemCountMessage() {
    let itemCount = getListItemCount();
    let location = document.getElementById("main-title");
    location.insertAdjacentHTML(
      "afterend",
      '<h2 id="item-count">You have ' +
        itemCount +
        " items in your shopping cart."
    );
  }
  /**
   * Function: getListItemCount()
   * Description: Helper function for inertListItemCountMessage()
   * Returns: number of chidren nodes belonging to shopping cart
   */
  function getListItemCount() {
    return list.children.length;
  }

  /**
   * Function: initItems()
   * Description: Adds mouseover/mouseout event listeners to .item-name elements
   * that will add a class to each item's img that will display the img
   */
  function initItems() {
    let items = getItems();

    for (i = 0; i < items.length; i++) {
      let itemImg = items[i].getElementsByTagName("img")[0];
      let currentItemName = items[i].getElementsByClassName("item-name");

      currentItemName[0].addEventListener("mouseover", () => {
        itemImg.classList.add("show-item");
      });
      currentItemName[0].addEventListener("mouseout", () => {
        itemImg.classList.remove("show-item");
      });
    }
  }
  /**
   * Function: getItems()
   * Description: Helper funciton for initItems()
   * Returns: an HTML collection have .item class divs
   */
  function getItems() {
    let items = document.getElementsByClassName("item");
    return items;
  }

  /**
   * Function: initButtons()
   * Description: Adds click event listeners to #btn-add-item/#btn-remove-item
   * elements that will insert a new <li></li> to shopping cart or remove the
   * most recently added <li></li>(last item in shopping cart) in shopping cart
   * respectively
   */
  function initButtons() {
    let buttonAddItem = getButton("btn-add-item");
    let buttonRemoveItem = getButton("btn-remove-item");

    buttonAddItem.addEventListener("click", () => {
      let itemCount = getListItemCount() + 1;
      let itemCountMessage = document.querySelector("#item-count");
      let item = prompt("What would you like to add?");
      list.insertAdjacentHTML("beforeend", "<li>" + item + "</li>");
      itemCountMessage.innerHTML = `You have ${itemCount} items in your shopping cart.`;
    });
    buttonRemoveItem.addEventListener("click", () => {
      let itemCount = getListItemCount() - 1;
      if (itemCount < 0) return;
      let itemCountMessage = document.querySelector("#item-count");
      let lastItem = listItems[listItems.length - 1];
      if (lastItem) list.removeChild(lastItem);
      itemCountMessage.innerHTML = `You have ${itemCount} items in your shopping cart.`;
    });
  }

  /**
   * Function: getButton()
   * Description: Helper function for initButtons()
   * Params: name: the name of the id of the button we want to get
   * Returns: an the HTML element of given id
   */
  function getButton(name) {
    let button = document.getElementById(name);
    return button;
  }
});
