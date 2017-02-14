var {expect} = require("chai")
var ceil = require('../spec/ceil')

describe("ceil", function() {
  it("should compute number rounded up to precision", function() {
    expect(ceil(3.2)).to.eql(4)
  })
})
