/**
 *
 * @author Ananaskelly
 */
define(function(){
    var figureSize = '';
    var minCoeff = 1;
    var opposite = '';
    var current = '';
    return {
        setFigureConfig: function(size, coeff) {
            figureSize = size;
            minCoeff = coeff;
        },
        setColor: function(color, oppositeColor) {
            current = color;
            opposite = oppositeColor;
        },
        getFigureConfig: function() {
            return {
                'size': figureSize,
                'coeff': minCoeff
            }
        },
        getOpposite: function() {
            return opposite;
        }
    }
})
