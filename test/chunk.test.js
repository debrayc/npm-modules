var {expect} = require("chai")
var chunk = require("../spec/chunk") // change spec and also folder
// name from spec to source

describe("chunk", function() {
  it("should split array into chunks according to selected size", function() {
    expect(chunk([1 , 2, 3, 4, 5], 3)).to.eql([[1 , 2 , 3],[4 , 5]])
  })
})
// Nest a for loop create variable for new array
//iterate through the new array to handle chunk size
