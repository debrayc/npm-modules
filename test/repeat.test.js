var {expect} = require("chai")
var repeat = require('../spec/repeat')

var str = 'cash'
var n = 5



describe("repeat", function() {
  it("should repeat the given string n times", function() {
    expect(repeat(str, n)).to.equal('cashcashcashcashcash')
  })
})
