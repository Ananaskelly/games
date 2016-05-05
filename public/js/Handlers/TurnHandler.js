/**
 *
 * @author Ananskelly
 */
define(['/GameControl/turnControl'], function(turnControl) {
    return {
        compile: function(data) {
            turnControl.apply(data);
        }
    };
});
