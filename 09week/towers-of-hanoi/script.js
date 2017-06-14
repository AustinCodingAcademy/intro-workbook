'use strict';

$(document).ready(function() {

function dropIt(event, object, ui){
  var currentValue = $(ui.draggable)[0].attributes[0].value;
  var lastChild = object.children.length && object.children[object.children.length -1].attributes[0].value || 0;
  if (parseInt(currentValue) < parseInt(lastChild) || lastChild == 0){
    $(ui.draggable).appendTo(object).attr('style', 'position: relative');
  }
  else {
    $(ui.draggable).draggable('option','revert',true);
  }
}
  $('.draggable').draggable({
    revert: "invalid"
  });
  $('.dropArea').droppable({
    drop: function(event, ui) {
      dropIt(event, this, ui);


function winning(event, object, ui) {
  if (parseInt(currentValue) == 250){
    alert("Congrats! You Won!");
        }
      }
    }
  });
});
