counterApp.factory('ExampleFactory', function(){
  var UserFactory = function() {
    this.currentTime = Date();
  };

  UserFactory.prototype.storeTime = function() {
    this.currentTime = Date();
  };

  return UserFactory;
});

counterApp.service('ExampleService', function(){
  this.currentTime = Date();

  this.storeTime = function() {
    this.currentTime = Date();
  };
});

counterApp.controller('ExampleCtrl', function(ExampleFactory, ExampleService){

  var self = this;

  self.exampleFactory = new ExampleFactory();
  self.exampleService = ExampleService;
});

counterApp.controller('CounterCtrl', function(){
  var self = this;

  self.counters = [{count: 0}, {count: 0}];

  // Now add buttons
  self.increment = function(counter) {
    counter.count++;
  };

  // Now get them to build this using a basic app, and add decrement
  // Now add a second counter
  // Now add five counters
  self.decrement = function(counter) {
    counter.count--;
  };
});
