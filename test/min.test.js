var {expect} = require("chai")
var min = require('../spec/min')

describe("min", function() {
  it("should display the lowest number in an array", function() {
    expect(min([4, 1, 2, 3])).to.eql(1)
  })
})
