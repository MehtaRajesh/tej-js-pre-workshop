describe("myFirstSum", function() {

  it("should be a number", function() {
    expect(typeof myFirstSum).toEqual('number');
  });

  it("should be equal to 2026", function () {
  	expect(myFirstSum).toEqual(2026);
  });

});
