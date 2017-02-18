var {expect} = require("chai")
var join = require('../spec/join')
var array = ['this' , 'should' , 'be' , 'easy']

describe("join", function() {
  it("should convert all elements into string with designated separator", function() {
    expect(join(array)).to.equal('this~should~be~easy')
  })
})
