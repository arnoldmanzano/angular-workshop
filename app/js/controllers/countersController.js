countersApp.controller("countersCtrl", function(){
  var self = this;

  self.count = 0;

  self.increment = function() {
    self.count++;
  };

  self.decrement = function() {
    self.count--;
  };
});
countersApp.controller("countersNumber", function(){
  var self = this;

  self.number = 5;

  self.getArray = function() {
    // return new Array(self.number);
    var x = [];
    for(var i=0; i<self.number; i++) {
      x.push(i);
    }
    return x;
  };
});
