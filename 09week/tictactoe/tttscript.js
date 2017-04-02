$(function() {
  let playerTurn = 'X';
//   var clickEvent;
//
// if ('onpointerdown' in window) {
//     // use 'pointerdown' if pointerEvent API is supported
//     clickEvent = 'pointerdown';
//     console.log('pointerEvents used');
// } else if ('ontouchstart' in window) {
//     // use 'touchstart' if touch device
//     clickEvent = 'touchstart';
//     console.log('touch device');
// } else {
//     // else use mouse event
//     clickEvent = 'click';
//     console.log('old fashioned mouse events');
// }

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');

    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles
      true,             // cancelable
      window,           // view
      1,                // detail
      touch.screenX,    // screenX
      touch.screenY,    // screenY
      touch.clientX,    // clientX
      touch.clientY,    // clientY
      false,            // ctrlKey
      false,            // altKey
      false,            // shiftKey
      false,            // metaKey
      0,                // button
      null              // relatedTarget
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {

    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {

    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);



  $('[data-cell]').on('click', function(event) {
    event.preventDefault();
    // alert("Was preventDefault() called: " + event.isDefaultPrevented());
    $(this).text(playerTurn);

// Check to see if there's a winner
    if (checkWin()) {
      $('#announce-winner').text(playerTurn + " wins!");
// $('#announce-winner').text(`Player ${playerTurn} Wins!`);
    }
// Switches from X to O and visa versa
    if (playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X'
    }
// playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });

// Clears the board and fades a clean board back in
  $("button").on('click', function(event) {
    event.preventDefault();
    alert("clear button pushed");
    $("div a[data-cell]").fadeOut(1000,function(){
      $("div a[data-cell]").empty();
      $('#announce-winner').empty();
      $("div a").fadeIn(1000);
      playerTurn = 'X';
    })
  })

// Check to see if there's a winner function
  function checkWin() {
    if(($('[data-cell="0"]').text() === playerTurn &&
       $('[data-cell="3"]').text() === playerTurn &&
       $('[data-cell="6"]').text() === playerTurn
     ) || ($('[data-cell="1"]').text() === playerTurn &&
          $('[data-cell="4"]').text() === playerTurn &&
          $('[data-cell="7"]').text() === playerTurn
        ) || ($('[data-cell="2"]').text() === playerTurn &&
             $('[data-cell="5"]').text() === playerTurn &&
             $('[data-cell="8"]').text() === playerTurn
           ) || ($('[data-cell="0"]').text() === playerTurn &&
                $('[data-cell="1"]').text() === playerTurn &&
                $('[data-cell="2"]').text() === playerTurn
              ) || ($('[data-cell="3"]').text() === playerTurn &&
                   $('[data-cell="4"]').text() === playerTurn &&
                   $('[data-cell="5"]').text() === playerTurn
                 ) || ($('[data-cell="6"]').text() === playerTurn &&
                      $('[data-cell="7"]').text() === playerTurn &&
                      $('[data-cell="8"]').text() === playerTurn
                    ) || ($('[data-cell="0"]').text() === playerTurn &&
                         $('[data-cell="4"]').text() === playerTurn &&
                         $('[data-cell="8"]').text() === playerTurn
                       ) || ($('[data-cell="2"]').text() === playerTurn &&
                            $('[data-cell="4"]').text() === playerTurn &&
                            $('[data-cell="6"]').text() === playerTurn
                          )
      )
        {
        return true;
       } else {
         return false;
       }
  }
})
