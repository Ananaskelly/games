/**
 *
 * @author Ananaskelly
 */
define(['./gameConfig'], function(gameConfig){
    var figureSize = gameConfig.getFigureConfig().size;
    var coeff = gameConfig.getFigureConfig().coeff;
    var opposite = gameConfig.getOpposite();
    function setIntervalTimes(callback, delay, time, custom)
    {
        var count = 0;
        var interval = window.setInterval(function () {
            callback(custom[count%2]);
            if (++count === time) {
                window.clearInterval(interval);
            }
        }, delay);
    }
    function changeState() {
        $('.state').text(opposite.toUpperCase()+' IN GAME');
        setIntervalTimes(function(color){$('.status').css({'background-color': color});},300,6,['yellow','#ffffff']);
    }
    function abroad(x, y){
        $('#'+x+y).children().css({
            width : figureSize*coeff,
            height: figureSize*coeff
        }).appendTo('.hit-'+opposite);
    }
    function move(figureId, x, y) {
        var last = $('#'+figureId).parent().attr('id');
        if ($('#'+x+y).hasClass('busy')) {
            abroad(x, y);
        }
        $('#'+figureId).appendTo('#'+x+y);
        $('#'+last).removeClass('busy');
        $('#'+x+y).addClass('busy');
        changeState();
    }
    return {
        apply: function(turnParametrs) {
            var game = $('.game-info').attr('data-game');
            var turn = $('.game-info').attr('data-turn');
            if (turnParametrs.game !== game || turnParametrs.prev !== turn)
                return;
            move(turnParametrs.move.figure, turnParametrs.move.x, turnParametrs.move,y );
            if (turnParametrs.event !== 'none') {
                $('#error').text(turnParametrs.event);
                $('.error-alert').show();
            }
        }
    }
})

