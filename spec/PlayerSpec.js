describe("Player", function() {
  var game;
  var frame1;
  var frame2;

  beforeEach(function() {
    game = new Game();
    frame1 = new Frame();
  });

  describe('frames',function(){
    
    it('should record throws',function(){
      frame1.throw(1);
      expect(frame1.pins1).not.toBe(null);
    });

    it('should record 2nd trhow',function(){
      frame1.throw(1);
      frame1.throw(5);
      expect(frame1.pins2).not.toBe(null);
    });

    it('should record a strike',function(){
      frame1.throw(10);
      expect(frame1.is_strike()).toBe(true);
    });

    it('should record a spare',function(){
      frame1.throw(5);
      frame1.throw(5);
      expect(frame1.is_strike()).toBe(false);
      expect(frame1.is_spare()).toBe(true);
    });
  });

  describe('game',function(){

    it ('should record a throw',function(){
      game.move(1);
      expect(game.nextFrame).toBe(false);
      expect(game.results.length).toBe(1);
    });

    it ('should recognize a strike',function(){
      game.move(10);
      expect(game.nextFrame).toBe(true);
    });

    it ('should close the frame after 2nd shot',function(){
      game.move(1);
      game.move(2);
      expect(game.nextFrame).toBe(true);
    });

    it ('should have has not two ',function(){
      game.move(2);
      expect(game.results[0].has_two()).toBe(false);
    });

    it ('has two throws in 1st frame',function(){
      game.move(1);
      game.move(2);
      expect(game.results[0].has_two()).toBe(true);
    });

    it ('should calculate points',function(){
      game.move(1);
      game.move(2);
      game.calculateScore(0);
      expect(game.points[0]).toBe(3);
    });

    it ('should calculate points for spare',function(){
      game.move(3);
      game.move(7);
      game.move(5);
      game.calculateScore(0);
      expect(game.points[0]).toBe(15);
    });

    it ('should calculate points for strike',function(){
      game.move(10);
      game.move(10);
      game.move(10);
      game.calculateScore(0);
      expect(game.points[0]).toBe(30);
    });
  });


});
