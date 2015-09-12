'use strict';

function getBoards() {
    return [document.getElementById('to-do'), 
            document.getElementById('doing'), 
            document.getElementById('done')];   
}
 
function showClick(event) {
    //alert('X: ' + event.clientX + 'Y: '+ event.clientY);
}

function setupBoards() {
    getBoards().forEach(function (eachBoard) {
        eachBoard.addEventListener('click', showClick, false);
    });
}

function addStickyNote(event) {
    var newNote = document.createElement('DIV');
    newNote.className = 'sticky-notes';
    newNote.style.top = event.clientY;
    newNote.style.left = event.clientY;

}
