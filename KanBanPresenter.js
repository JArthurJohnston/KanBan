/**
 * Created by arthur on 9/11/15.
 */
var KanBanPresenter = (function(){
    'use strict';

    var initialize = function(){
        var addButton = document.getElementById('add-note-button');
        addButton.onclick = addNoteOnlcick;
    };

    var addNoteOnlcick = function(){
        alert('new note was ckicled');
    }

    return {initialize: initialize()}

}());

