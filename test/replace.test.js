var {expect} = require("chai")
var replace = require('../spec/replace')
var sentence = 'We are at the ship yard'
var word1 = "ship"
var word2 = "house"
// var str = "Mr Blue has a blue house and a blue car";
// var res = str.replace(/blue/g, "red");

  describe("replace", function() {
    it("should replace one word for another", function() {
      expect(replace(sentence, word1, word2))
        .to.equal('We are at the house yard')
    })
  })
  // function myFunction() {

//     var str = document.getElementById("demo").innerHTML;
//     var res = str.replace("Microsoft", "W3Schools");
//     document.getElementById("demo").innerHTML = res;
// }
