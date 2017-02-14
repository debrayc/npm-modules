var {expect} = require("chai")
var divide = require('lodash.divide')

describe("divide", function() {
  it("should divide num1 by num2", function() {
    expect(divide( 1 , 2 )).to.eql(.5)
  })
})
