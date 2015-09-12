/**
 * Created by arthur on 9/11/15.
 */

var ActivityBoard = (function(){
    'user strict';

    var activityBoard = function(){
        this.notes = [];
    };

    activityBoard.prototype.addStickeyNote = function(aNote){
        this.notes.push(aNote);
    };

    activityBoard.prototype.removeStickeyNote = function(aNote){
        var index = this.notes.indexOf(aNote);
        this.notes.splice(index, 1);
    };

    return activityBoard;
}());