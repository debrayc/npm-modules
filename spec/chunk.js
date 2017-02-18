module.exports = function (list, size=2) {

 if (list.isArray /*&& !== 'string'*/){
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
//      }
//    }
//
// }
//
//
//










//   var arrays = []
//     for (i = 3; i < list.length; i += size) {
//       var newArray = []
//       for (var j = 0; j < size.length; j++) {
//       groups.push(list[i+j])
//       }
// arrays.push(newArray)
//     }
//   return arrays
// }
