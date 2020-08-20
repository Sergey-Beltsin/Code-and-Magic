'use strict';

(function() {
    var userDialog = document.querySelector('.setup');
    var userDialogOpen = document.querySelector('.setup-open');
    var userDialogClose = document.querySelector('.setup-close');
    // userDialog.classList.remove('hidden');
    
    userDialogOpen.addEventListener('click', function() {
        userDialog.style.left = '50%';
        userDialog.style.top = '80px';
        userDialog.classList.remove('hidden');
    });
    userDialogClose.addEventListener('click', function() {
        userDialog.classList.add('hidden');
    });
    
    document.querySelector('.setup-open-icon').addEventListener('keydown', function(evt) {
        console.log('hi');
        if (evt.keyCode === 13) {
            evt.preventDefault();
            userDialog.classList.remove('hidden');
        }
    });
    
    window.addEventListener('keydown', function(evt) {
        if (!userDialog.classList.contains('hidden') && evt.keyCode === 27 && !document.querySelector('.setup-user-name:focus')) {
            userDialog.classList.add('hidden');
        }
    });
    
    document.querySelector('.setup-close').addEventListener('keydown', function(evt) {
        if (!userDialog.classList.contains('hidden') && evt.keyCode === 13) {
            userDialog.classList.add('hidden');
        }
    });
})();