// Метод join()

['he', 'll', 'o'].join(); // he.,ll,o
['he', 'll', 'o'].join('*'); // he*llo*o
['he', 'll', 'o'].join('#'); // he#ll#0
['he', 'll', 'o'].join(''); // hello
['he', 'll', 'o'].join(' '); // he ll o

const arr = [2, 3, 4, 5]

function myJoin(array, separator) {
    let str = '';
    for (let i = 0; i < array.length - 1; i++) {
        str += array[i]+separator
    } 
    return str + array[array.length - 1];
}
