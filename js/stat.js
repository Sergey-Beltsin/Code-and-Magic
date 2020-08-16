'use strict';

const CLOUD_WIDTH = 480;
const CLOUD_HEIGHT = 225;
const CLOUD_X = 135;
const CLOUD_Y = 40;
const GAP = 50;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_WIDTH = 40;
var barHeight = (CLOUD_HEIGHT - GAP - FONT_GAP - FONT_GAP + 5);

window.renderStatistics = function(ctx, players, times) {
    // Облака, появляющиеся по окончанию игры

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.moveTo(110, 15);
    ctx.lineTo(375, 40);
    ctx.lineTo(640, 15);
    ctx.lineTo(615, 140);
    ctx.lineTo(640, 290);
    ctx.lineTo(375, 265);
    ctx.lineTo(110, 290);
    ctx.lineTo(135, 140);
    ctx.lineTo(110, 15);
    ctx.fill();
    
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(100, 5);
    ctx.lineTo(365, 30);
    ctx.lineTo(630, 5);
    ctx.lineTo(605, 130);
    ctx.lineTo(630, 280);
    ctx.lineTo(365, 255);
    ctx.lineTo(100, 280);
    ctx.lineTo(125, 130);
    ctx.lineTo(100, 5);
    ctx.fill();


    // Гистограмма

    //Красим гистограмму

    var coloredGistogramm = function (player) {
        var randomOpacity = Math.random().toFixed(2);
        
        if (player === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = `rgba(0, 0, 255, ${randomOpacity}`;
        }
    }

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono'
    ctx.fillText('Ура, вы победили', CLOUD_X, CLOUD_Y - 7);
    ctx.fillText('Список результатов:', CLOUD_X, CLOUD_Y - 7 + FONT_GAP);

    var getMaxElement = function(arr) {
        var maxElement = arr[0];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > maxElement && arr.length > 0) {
                maxElement = arr[i]
            }
        }

        return maxElement;
    }

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
        var getBarHeight = (barHeight * times[i]) / (maxTime - 0);
        ctx.fillStyle = coloredGistogramm(players[i]);

        ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT, BAR_WIDTH, -getBarHeight);
        
        ctx.fillStyle = '#000000';
        ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + FONT_GAP);
        ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, (CLOUD_HEIGHT + CLOUD_Y) - GAP - ((barHeight * times[i]) / maxTime));
    }
};