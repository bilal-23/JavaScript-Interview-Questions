//Polyfill for map()
// Array.map((num, index, arr) => { });


Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const array = [1, 2, 3, 4];

const twice = array.myMap((item, i, arr) => {
    return item * 2;
});

console.log(twice);