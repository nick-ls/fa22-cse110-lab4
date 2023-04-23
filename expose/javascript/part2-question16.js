// Calling the s function on the object logs the value of the
// property of an object iff the property name starts with r
// or the property value is odd 

s=_=>{for(let i in _){if(_[i]%2||i[0]=="r")console.log(_[i])}}

/** ex:
 * > s({redCars:21,blueCars:45,greenCars:12,raceCars:5,blackCars:40,rareCars:2})
 * 21
 * 45
 * 5
 * 2
 */