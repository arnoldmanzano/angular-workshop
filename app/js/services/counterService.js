counterApp.service('CounterService', function(){
  this.count = 0;

  this.increment = function() {
    this.count++;
  };

  this.decrement = function() {
    this.count--;
  };
});
