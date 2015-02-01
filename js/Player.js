//round object for bowling single round
var Move = function(result) {
  this.pins = result;
}

Move.prototype.is_strike = function() {
  if (this.pins === 10)
  {
    this.strike = true;
  }
  else
  {
    this.strike = false;
  }
  return this.strike;
};

//Game object for the whole bowling
var Game = function() {
  this.score = 0;
  this.results = [];
  this.moves = 0;
};

Game.prototype.init = function() {
  this.score = 0;
  this.moves = 0;
};

Game.prototype.is_end = function() {
  return false;
};

Game.prototype.move = function(pins_hit) {
   var move = new Move(pins_hit);
   console.log(move);
   this.results.push(move);
   this.moves += 1;    
};
