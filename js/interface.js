console.log("Test info");

var game = new Game();

$(document).ready(function(){
    $('#round').text(game.moves);
    $('#total').text(game.calculateScore(game.moves));
});