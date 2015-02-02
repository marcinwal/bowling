//round object for bowling single round

var REG_MOVES = 10;
var BONUS_MOVES = 2;
var PINS = 10;

var Frame = function(result) {
  this.pins1 = null;
  this.pins2 = null;
  this.spare = null;
  this.strike = null;
};

Frame.prototype.throw = function(result){
  if (this.pins1 === null) 
  {
    this.pins1 = result;
    this.is_strike();
  }else
  {
    this.pins2 = result;
    this.is_spare();
  }
};

Frame.prototype.is_spare = function(){
  if(this.pins2 === PINS)
  {
    this.spare = true;
  }else
  {
    this.spare = false;
  }  
  return this.spare;
};

Frame.prototype.is_strike = function() {
  if(this.pins1 === PINS)
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

};

Game.prototype.calculate_points = function(round) {

};
