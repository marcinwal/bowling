var player;


var Throw = function(){
  this.pins = 10;
  this.strike = false;
}

Throw.prototype.is_strike(pins){
  if (pins === 10)
  {
    this.strike = true;
  }
  else
  {
    this.srtike = false;
  }
}

var Game = function(){
  this.score = 0;
  this.frames = [];
  this.round = 0;
}

Game.prototype.start(){
  this.score = 0;
}

