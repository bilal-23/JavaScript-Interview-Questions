// Map vs ForEacg
const arr = [1, 2, 3, 4, 5];

const mapResult = arr.map(item => item * 2);

const forEachResult = arr.forEach(item => item * 2);

console.log(mapResult, forEachResult); //[2, 34, 6, 8, 10] undefined

//map will create a new array twice the value of original arr, forEach will return undefined

// You can chain stuff on map not on forEach
arr.map().filter();