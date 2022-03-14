/*console.log('Hello World');
console.log("Hello World");

var x = 42;
let y = true;
const z = {
    myattribute: 'myValue'
};

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

z.myattribute = 7;
z['myattribute'] = 7;

console.log(typeof null);
console.log(typeof undefined);
//z.unknownAttribute.xyz
console.log(typeof [])

// named function
function add(x, y) {
    return x + y;
}

// unnamed function an variable binden
const myAdd = function (x, y) {
    return x + y;
}

console.log(add(1, 3))
console.log(myAdd(1, 2))
console.log(myAdd('1', 2))
console.log(myAdd(1, '2'))
console.log(myAdd({myattribute: 1}, 2))
console.log(myAdd(add, 2))
// arrow function
const anotherAdd = (x, y) => {
    const myVar = 'hutzlibutzli';
    return x + y;
}
console.log(anotherAdd(4, 7))

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
myArray.push(10)
console.log(myArray)
console.log('Popped item', myArray.pop())
console.log('Array after pop', myArray)

console.log('shifted item', myArray.shift())
console.log('Array after shift', myArray)
console.log('unshift item', myArray.unshift(1)) // Ausgabe der neuen Größe
console.log('Array after unshift', myArray)

console.log('subarray', myArray.slice(3, 6))

console.log('map', myArray.map(item => item + 10))
console.log('filter', myArray.filter(item => item % 2 === 0))
*/
const boolToString = (b) => {
    if (b) {
        console.log('true')
    } else {
        console.log('false')
    }
}

boolToString(true)
boolToString(false)
boolToString(1)
boolToString(0)
boolToString(-1)
boolToString('1')
boolToString('')
boolToString([])
boolToString({})
boolToString(null)
boolToString(undefined)
boolToString('0')
