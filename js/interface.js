console.log("Test info");

var game = new Game();

$(document).ready(function(){
    $('#round').text(game.moves);
});