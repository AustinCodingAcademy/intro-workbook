'use strict';

$(document).ready(function() {

  var gameOver = false;
  var $stacks = $('.column');
  var $blocks = $('.block');
  //since only last child of every stack is allowed to make the move, give them class movable
  var $movableBlocks = $('.block:last-child');
  $movableBlocks.addClass("movable");

  // var $moves = $('#moves');
  // $moves += 1;
  // $("#moves").text($moves + " moves");

  //any block is draggable, but they revert to original position unless condition is met
  $movableBlocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if (!gameOver) {
        if (goodToDrop($(this), ui.draggable)) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).append(ui.draggable.detach());
          ui.draggable.css({
            'top': 0,
            'left': 0
          });
          //reset things
          $movableBlocks = $('.block:last-child');
          $('.block').removeClass("movable");
          $movableBlocks.addClass("movable");
          $blocks.draggable({
            revert: true
          });
          //checkForWin
          checkForWin();
        }
      }
    }
  });

  // function countMove() {
  //
  // }

  function goodToDrop($stack, $blocks) {
    var $last_block = $stack.children().last();
    if (parseInt($blocks.css("width")) < parseInt($last_block.css("width")) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkForWin() {
    if ($('#col3').children().length === 8) {
      $('#winner').html("<h2>You Won!</h2>");
      gameOver = true;
      // make all of the block unmovable until reset button is pressed
    }
  }

  $("button").click(function() {
    $('#col1').html('<div class="base"></div><div class="block" id="first"></div><div class="block" id="second"></div><div class="block" id="third"></div><div class="block" id="fourth"></div><div class="block" id="fifth"></div><div class="block" id="sixth"></div><div class="block" id="seventh"></div>');
    $('#col2').html('<div class="base"></div>');
    $('#col3').html('<div class="base"></div>');
    $('#winner').empty();
    gameOver = false;
    // moves = 0;
  });


});
// var gameover = false;
// var $stacks = $('.column');
// var $blocks = $('.block');
//
// var movable = $('.column:last-child');
// $(movable).addClass("movable");
// $('.block').removeClass("movable");
// $(movable).addClass("movable");
// $blocks.draggable({
//   revert: true
// });
//
// // make blocks draggable
// $('.movable').draggable({
//   revert: true
// });
//
// blocks only droppable in stacks
// $('.column').droppable({
//   accept: ".movable",
//   drop: function(event, ui) {
//     var drag = $(ui.draggable).attr('block');
//     var lastChild = $($(this).children().last[0]).attr('data-block');
//     if (parseInt(drag) > parseInt(lastChild)) {
//       $(ui.draggable).draggable.draggable('option', 'revert', true);
//       checkVictory();
//     } else {
//       $(ui.draggable).appendTo(this).attr('style', 'position: relative');
//     }
//   }
// });
//
// function checkVictory() {
//   if ($('#col3').children().length === 4) {
//     alert("You've won!)");
//     gameover = true;
//   }
// }
//
// function resetGame() {
//   $('#col1').html('<div #first></div><div #second></div><div #third></div><div #fourth></div>');
//   $('#col2').empty();
//   $('#col3').empty();
//   $('#announce-game-won').empty();
//   gameover = false;
// }
