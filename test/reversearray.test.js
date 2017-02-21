var {expect} = require("chai")
var reversearray = require("../spec/reversearray")
var array = [3 , 2 , 1]

describe("reversearray", function() {
  it("should reverse elements in array", function() {
    expect(reversearray([3 , 2 , 1])).to.eql([1 , 2 , 3])
  })
})
