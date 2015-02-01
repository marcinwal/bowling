//round object for bowling single round

var REG_MOVES = 10;
var BONUS_MOVES = 2;

var Round = function(result) {
  this.pins = result;
}

Round.prototype.is_strike = function() {
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
  if ((this.moves >= REG_MOVES-1) && (!this.is_last_strike))
  {
    return true;
  }
  if(this.moves === REG_MOVES + BONUS_MOVES){ return true;}
  return false;
};

Game.prototype.is_last_strike = function(){
  if((this.moves > 0) && (this.results[this.moves-1].is_strike()))
  {
    return true;
  } 
  return false;
}

Game.prototype.move = function(pins_hit) {
  if(!this.is_end())
  {  
   var round = new Round(pins_hit);
   console.log(round);
   this.results.push(round);
   this.moves += 1;
   return move;    
  } else {return null;}
};

Game.prototype.calculate_points = function(round) {

};
