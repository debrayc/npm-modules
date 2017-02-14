var {expect} = require("chai")
var multiply = require("../spec/multiply")

describe("multiply", function() {
  it("should multiply num1 by num2", function() {
    expect(multiply( 1 , 2 )).to.eql(2)
  })
})
