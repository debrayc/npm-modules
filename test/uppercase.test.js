var {expect} = require("chai")
var uppercase = require("../spec/uppercase")

describe("uppercase", function() {
  it("should capitalize all letters in string", function() {
    expect(uppercase("Hello World")).to.eql("HELLO WORLD")
  })
})
