var {expect} = require("chai")
var camelcase = require('../spec/camelcase')
var str = "This Should Be Camelized"

describe("camelcase", function() {
  it("should camelize any sentence", function() {
    expect(camelcase(str)).to.equal("ThisShouldBeCamelized")
  })
})
