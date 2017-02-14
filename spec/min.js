module.exports = function min( inputArray ) {
  if(Array.isArray(inputArray)){
    return Math.min.apply(null, inputArray)
  } else {
    return
  }
}
