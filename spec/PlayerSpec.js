describe("Player", function() {
  var game;
  var frame1;
  var frame2;

  beforeEach(function() {
    game = new Game();
    frame1 = new Frame();
    frame2 = new Frame();
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

    it('should record a sparee',function(){
      frame1.throw(5);
      frame1.throw(10);
      expect(frame1.is_strike()).toBe(false);
      expect(frame1.is_spare()).toBe(true);
    });
  });


});
