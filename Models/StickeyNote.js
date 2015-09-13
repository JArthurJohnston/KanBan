/**
 * Created by arthur on 9/11/15.
 */
var StickeyNote = (function(){
    'use strict';

    var stickeyNote = function(title, description, estimate){
        this.title = title;
        this.description = description;
        this.estimate = estimate;
    };

    return stickeyNote;
}());
