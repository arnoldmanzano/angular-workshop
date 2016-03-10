counterApp.factory('CounterFactory', function(){
  var UserFactory = function() {
    this.count = 0;
  };

  UserFactory.prototype.increment = function() {
    this.count++;
  };

  UserFactory.prototype.decrement = function() {
    this.count--;
  };

  return UserFactory;
});
