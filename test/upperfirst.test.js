var {expect} = require("chai")
var upperfirst = require("../spec/upperfirst")

describe("upperfirst", function() {
  it("should capitalize first letter of each word in string", function() {
    expect(upperfirst("hello world")).to.equal("Hello World")
  })
})
