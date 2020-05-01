"use strict";
// when the document is done loading, run the script inside
$(document).ready(function() {
  var cntByOnes = 1;
  var cntByTens = 10;
  var cntByHundreds = 100;
  var boxes = $(".box");

  alert("Are you ready to count by ones, tens and hundreds?");

  // Init Boxes
  for (var i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
    $(boxes[i]).addClass("draggable");
  }

  // Count By One
  $("#counter-1").click(function() {
    cntByOnes++;
    $(this).text(cntByOnes);
  });

  // Count By Ten
  $("#counter-10").click(function() {
    cntByTens += 10;
    $(this).text(cntByTens);
  });

  // Count By Hundreds
  $("#counter-100").click(function() {
    cntByHundreds += 100;
    $(this).text(cntByHundreds);
  });

  // Count By All
  $("#counter-all").click(function() {
    cntByOnes++;
    cntByTens += 10;
    cntByHundreds += 100;

    $("#counter-1").text(cntByOnes);
    $("#counter-10").text(cntByTens);
    $("#counter-100").text(cntByHundreds);
  });

  // Reset
  $("#reset").click(function() {
    cntByOnes = 1;
    cntByTens = 10;
    cntByHundreds = 100;

    $("#counter-1").text(cntByOnes);
    $("#counter-10").text(cntByTens);
    $("#counter-100").text(cntByHundreds);
  });

  // Draggable Feature
  function handle_mousedown(e) {
    window.my_dragging = {};
    my_dragging.pageX0 = e.pageX;
    my_dragging.pageY0 = e.pageY;
    my_dragging.elem = this;
    my_dragging.offset0 = $(this).offset();

    function handle_dragging(e) {
      var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
      var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
      $(my_dragging.elem).offset({ top: top, left: left });
    }

    function handle_mouseup(e) {
      $("body")
        .off("mousemove", handle_dragging)
        .off("mouseup", handle_mouseup);
    }

    $("body")
      .on("mouseup", handle_mouseup)
      .on("mousemove", handle_dragging);
  }

  $(".draggable").mousedown(handle_mousedown);
});
