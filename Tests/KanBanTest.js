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
        expect(document.querySelectorAll('.sticky-notes').length).toBe(0);
        addStickyNote(mockEvent);
        expect(document.querySelectorAll('.sticky-notes').length).toBe(1);

        var noteAdded = document.querySelectorAll('.sticky-notes')[0];
        expect(noteAdded.tagName).toBe('DIV');
        expect(noteAdded.className).toBe('sticky-notes');
        expect(noteAdded.style.top).toBe(mockEvent.clientY);
        expect(noteAdded.style.left).toBe(mockEvent.clientX);
    });
});

describe('stickey note class', function() {
    it('should be constructed properly', function(){
        var expectedTitle = 'Stuff to do';
        var expectedDescription = 'lots of stuff';
        var expectedEstimate = 234;

        var note = new StickeyNote(expectedTitle, expectedDescription, expectedEstimate);

        expect(note.title).toBe(expectedTitle);
        expect(note.description).toBe(expectedDescription);
        expect(note.estimate).toBe(expectedEstimate);
    });
});

describe('Activity Board class', function() {
    it('is constructed properly', function() {
        var toDoBoard = new ActivityBoard();

        expect(toDoBoard.notes.length).toBe(0);
    });

    it('can add and remove notes', function(){
        var board = new ActivityBoard();
        var newNote = new StickeyNote();

        expect(board.notes.length).toBe(0);
        board.addStickeyNote(newNote);
        expect(board.notes.length).toBe(1);
        expect(board.notes).toContain(newNote);

        board.removeStickeyNote(newNote);
        expect(board.notes.length).toBe(0);

    });
});