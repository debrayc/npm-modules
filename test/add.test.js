var {expect} = require("chai")
var add = require("../spec/add")

describe("add", function() {
  it("should add two numbers", function(){
    expect(add( 1 , 2 )).to.eql(3)
  })
})
