module.exports = function (list, size=2) {

 if (list.isArray){
  return []
 }
 var newList = []
 for(var i = 0; i < list.length ; i+=size) {
   var subArray = []
   for(var j = 0; j < size ; j++) {
     if (list[i+j]) {
       subArray.push(list[i+j])
      }

   }
   newList.push(subArray)
 }

 return newList
}
