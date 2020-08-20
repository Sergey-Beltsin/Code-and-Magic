'use strict';

(function() {
    var userDialog = document.querySelector('.setup');
    var dialogHandler = document.querySelector('.upload');
    
    dialogHandler.addEventListener('mousedown', function (evt) {
        evt.preventDefault();
    
        var startCoords = {
          x: evt.clientX,
          y: evt.clientY
        };
    
        var dragged = false;
    
        var onMouseMove = function (moveEvt) {
          moveEvt.preventDefault();
          dragged = true;
    
          var shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
          };
    
          startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
          };
    
          userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
          userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    
        };
    
        var onMouseUp = function (upEvt) {
          upEvt.preventDefault();
    
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
    
          if (dragged) {
            var onClickPreventDefault = function (evt) {
              evt.preventDefault();
              dialogHandler.removeEventListener('click', onClickPreventDefault)
            };
            dialogHandler.addEventListener('click', onClickPreventDefault);
          }
        };
    
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
})();