describe("CounterCtrl", function(){
  var ctrl;

  beforeEach(function(){
    module("counterApp");
    inject(function($controller){
      ctrl = $controller("CounterCtrl");
    });
  });

  it("starts at 0 count", function(){
    expect(ctrl.counters[0].count).toEqual(0);
  });

  it("can be incremented", function(){
    ctrl.increment(ctrl.counters[0]);
    expect(ctrl.counters[0].count).toEqual(1);
  });

  it("can be decremented", function(){
    ctrl.decrement(ctrl.counters[0]);
    expect(ctrl.counters[0].count).toEqual(-1);
  });
});
