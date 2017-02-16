module.exports = function upperfirst( str ) {
  function substr(match) {
    return match.toUpperCase()
  }
    return str.replace(/\b[a-z]/g, substr)
    }
