var {expect} = require("chai")
var subtract = require("../spec/subtract")

describe("subtract", function() {
  it("should subtract Num2 from Num1", function(){
    expect(subtract( 1 , 2 )).to.eql(3)
  })
})
