var {expect} = require("chai")
var camelcase = require('../spec/camelcase')
var sentence = "This Should Be Camelized"

// var upperFirst = require('../spec/upperFirst')

 describe("camelcase", function() {
  it("should camelize any sentece", function() {
   expect(camelcase(sentence).to.eql("thisShouldBeCamelized"))
  })
 })
