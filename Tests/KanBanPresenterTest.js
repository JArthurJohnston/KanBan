/**
 * Created by arthur on 9/11/15.
 */
'use strict';

describe('wires up view correctly', function() {
    var mockBody;
    var toDoDiv;
    var doingDiv;
    var doneDiv;
    var headerDiv;
    var addButtonDiv;

    beforeEach(function(){
        mockBody = document.createElement('DIV');
        toDoDiv = document.createElement('DIV');
        doingDiv = document.createElement('DIV');
        doneDiv = document.createElement('DIV');
        headerDiv = document.createElement('DIV');
        addButtonDiv = document.createElement('DIV');
        mockBody.appendChild(headerDiv);
        headerDiv.appendChild(addButtonDiv);
        mockBody.appendChild(toDoDiv);
        mockBody.appendChild(doingDiv);
        mockBody.appendChild(doneDiv);
        document.body.appendChild(mockBody);
    });

    afterEach(function(){
        document.body.removeChild(mockBody);
    });

    it('should add event handler to add note button', function(){

    });
});