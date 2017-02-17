module.exports =function ( str ) {
  function upperCase(match) {
    return match.toUpperCase()
  }
  return str.replace(/\b[a-z]/g, upperCase).replace(/\s/g, '')
}
