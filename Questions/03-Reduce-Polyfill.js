//Polyfill for reduce
// array.reduce((acc,curr,index,array)=>{},initialValye)

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

const array = [1, 2, 3, 4];

const sum = array.myReduce((acc, curr) => {
    return acc + curr;
}, 10);

console.log(sum);