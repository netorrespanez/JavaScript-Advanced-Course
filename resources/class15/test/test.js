/* describe("Car Constructor", function() {
  before(function() {
    //Will run before all tests in this block
    this.car = new Car();
  });
  after(function() {
    //Will run after all tests in this block
    delete this.car;
  });
  it("should have 4 wheels", function() {
    expect(this.car.getWheels()).to.equal(4);
  });
  it("should have positive fuel", function() {
    expect(this.car.getFuel()).to.equal(16);                                                                                 
  });
  it("should throw Error if getColor is called without being set", function() {
    // Note that here we are passing function directly to expect
    //expect(this.car.getColor).to.throw(Error);

    let expectedResult =  new Error('Not Color');

    expect(this.car.getColor).to.equal(expectedResult);

    //this.car.getColor.to.equal(undefined);

  });
  it("should return a color if set", function() {
    var color = "Red";

    this.car.setColor("Red");
    //expect(this.car.getColor()).to.be.a("string");
    expect(this.car.getColor()).to.equal(color);
  });
}); */


describe("Car movement", function() {                                                                                                             
  beforeEach(function() {
    this.server = sinon.fakeServer.create();
    this.car = new Car();
    sinon.stub(this.car, "moveForward");
    //sinon.stub(this.car, "stayPut");
  });
  afterEach(function() {
    this.server.restore();
    this.car.moveForward.restore();
    //this.car.stayPut.restore();
    delete this.car;
  });
  it("should call moveForward, when server responds with canMove as True", function(done) {
    this.server.respondWith("GET", "/check_forward_movement_ability.json",
      [200, { "Content-Type": "application/json" },
      '{ "canMove": true }']);
    this.car.driveForward(5);
    this.server.respond();
    sinon.assert.calledOnce(this.car.moveForward);
    //Tell mocha to wait for response, and then run the test
    //by calling done() callback
    done();
  });
  it("should not call moveForward, when server responds with canMove as False", function(done) {
    this.server.respondWith("GET", "/check_forward_movement_ability.json",
      [200, { "Content-Type": "application/json" },
      '{ "canMove": false }']);
    this.car.driveForward(5);
    this.server.respond();
    sinon.assert.notCalled(this.car.moveForward);
    done();
  });
});