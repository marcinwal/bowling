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

Frame.prototype.sum = function(){
  if (this.pins2 === null){
    return this.pins1;
  }else
  {
    return this.pins1+this.pins2;
  }
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
  if(((this.pins1 + this.pins2)  === PINS) && (this.pins1 != PINS))
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
  this.results = []; //recorded hits
  this.moves = 0; //current frame
  this.nextFrame = true; //if we closed the frame
  this.points = []; //points per frame
  this.hits = [];
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
  this.hits.push(pins_hit);
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

Game.prototype.getNextThrow = function(id_frame){
 if (typeof this.results[id_frame+1] != 'undefined')
 { 
  return this.results[id_frame+1].pins1;
 } else 
 {
  return 0;
 }
};

Game.prototype.getNext2ndThrow = function(id_frame){
 if(typeof this.results[id_frame+1] != 'undefined') 
 { 
  if (this.results[id_frame+1].is_strike)
  {  
    if(typeof this.results[id_frame+2] != 'undefined')
    {
      return this.results[id_frame+2].pins1;
    }  
  }else
  { if(this.results[id_frame+1].pins2 != null)
    {
      return this.results[id_frame+1].pins2;
    }
  }
 }
 return 0;
}

Game.prototype.calculateScore = function(id_frame){
  this.points[id_frame] = this.results[id_frame].sum();
  if ((this.results[id_frame].is_spare()) || (this.results[id_frame].is_strike()))
  {
    this.points[id_frame] += this.getNextThrow(id_frame);
  }

  if (this.results[id_frame].is_strike())
  {
    this.points[id_frame] += this.getNext2ndThrow(id_frame);
  }

};
