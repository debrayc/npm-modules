module.exports =function ( sentence ) {
 function camelcase(match) {
  return match.toUpperCase()
 }
  return sentence.replace(/\b[a-z]/g, camelcase).replace(/\s/g, '')
  }
