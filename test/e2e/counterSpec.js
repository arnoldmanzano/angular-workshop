describe("Counter application", function(){

  it("Displays a counter", function(){
    browser.get("http://localhost:8000");
    var counter1 = $("#count1");
    expect(counter1.getText()).toBe("0");
  });

  it("Clicking button increases count", function(){
    browser.get("http://localhost:8000");
    var counter1 = $("#count1");
    var increment1 = $('#increment1');
    increment1.click();
    expect(counter1.getText()).toBe("1");
  });

  it("Clicking button decreases count", function(){
    browser.get("http://localhost:8000");
    var counter1 = $("#count1");
    var decrement1 = $('#decrement1');
    decrement1.click();
    expect(counter1.getText()).toBe("-1");
  });

  it("Displays two counters", function(){
    browser.get("http://localhost:8000");
    var counter1 = $("#count1");
    var counter2 = $("#count2");
    var increment1 = $('#increment1');
    increment1.click();
    expect(counter1.getText()).toBe("1");
    expect(counter2.getText()).toBe("0");
  });

  it("Displays n counters", function(){
    browser.get("http://localhost:8000");
    var repeatnum = $("#repeatnum");
    repeatnum.sendKeys('5');
    expect(element(by.id('count5')).isPresent()).toBe(true);
  });
});
