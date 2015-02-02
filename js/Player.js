//round object for bowling single round

var REG_MOVES = 10;
var PINS = 10;
var BONUS = 2; //extra throws/frames

var Frame = function(result) {
  this.pins1 = null;
  this.pins2 = null;
  this.spare = null;
  this.strike = null;
  this.nextFrame = true;
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

Frame.prototype.has_two = function(){
  if ((this.pins1 !=null) && (this.pins2 !=null)){
    return true;
  }else{
    return false;
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
  this.nextFrame = true;
};


Game.prototype.is_last_strike = function(){
  if((this.moves > 0) && (this.results[this.moves-1].is_strike()))
  {
    return true;
  } 
  return false;
}

Game.prototype.is_last_spare = function(){
  if((this.moves > 0) && (this.results[this.moves-1].is_spare()))
  {
    return true;
  } 
  return false;
}

Game.prototype.is_end = function() {
  if((this.results.length > REG_MOVES) && (!this.is_last_strike()))
    {return true;}
  if (this.results.length >= REG_MOVES + BONUS){
    return true;
  }

  return false;
};



Game.prototype.move = function(pins_hit) {
  if(this.nextFrame){    //next frame with 2 throws
    var fr = new Frame();
    fr.throw(pins_hit);
    this.results.push(fr);
    if (fr.is_strike()){
      this.moves += 1;  //closing the frame
      this.nextFrame = true;
    } else
    {
      this.nextFrame = false;
    }
  } else
  {
    this.results[this.moves].throw(pins_hit);
    this.nextFrame = true;
    this.moves += 1;
  }
};

Game.prototype.calculate_points = function(round) {

};
