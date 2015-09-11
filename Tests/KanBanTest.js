'use strict';

describe('getBoards', function() {
    var boards;
    it('should return an array with the 3 boards', function(){
        boards = getBoards();
        expect(boards.length).toBe(3);
    }); 
});

describe('create new sticky note', function() {
    it('should add a div to the boards', function() {
        var mockEvent = {clientX: 4,
                        clientY: 6};
//        expect(document.querySelectorAll('.sticky-notes').length)toBe(0);
//        addStickyNote(mockEvent);
        var x = document.querySelectorAll('.sticky-notes').length;
//        expect(x)toBe(1);
        
    });
});