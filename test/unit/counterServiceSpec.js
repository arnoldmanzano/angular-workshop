describe("CounterService", function(){
  var counter;

  beforeEach(function(){
    module("counterApp");
    inject(function(CounterService){
      counter = CounterService;
    });
  });

  it("starts at 0 count", function(){
    expect(counter.count).toEqual(0);
  });

  it("can be incremented", function(){
    counter.increment();
    expect(counter.count).toEqual(1);
  });

  it("can be decremented", function(){
    counter.decrement();
    expect(counter.count).toEqual(-1);
  });
});
