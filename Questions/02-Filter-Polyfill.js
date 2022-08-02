//Polyfill for filter()
// Array.filter(value,index,array)

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

const array = [1, 2, 3, 4];

const filteredArray = array.myFilter((item, index, arr) => {
    if (item > 2) {
        return item;
    }
});

console.log(filteredArray)  //[ 3 , 4 ]