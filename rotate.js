let key = 2

let array = [1,2,3,4,5,6,7,8,9,10]


let temp = array.slice(0, key)
let temp2 = array.slice(key, array.length )

array = temp2.concat(temp)
console.log(array); 