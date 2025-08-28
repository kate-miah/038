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


// Функции как агрументи других функций 

function multyTwo(argum) {
    return argum*2;
}

function square(argum) {
    return argum**2;
}

const fn2 = multyTwo; //передача посилання на функцию

// Фуекция высшего порядка (High order function - HOF)

function getConsoleExp(number, func) { //йункция - аргумент другой функции
    const res = func(number); // функция обратного вызова
    console.log(res);
}

getConsoleExp(4, multyTwo);
getConsoleExp(3, square);


// .forEach(функция) - принимает функция и выполняет ее на каждом елементе массива
const array = [4, 5, 6, 7, 8]
array.forEach(callback)

function callback(currentValue,index, array) {
    console.log(`${currentValue} --- ${index} --- ${array}`);
}

const users = [{
    name: 'John',
    lastName: 'Doe',
    email: '123@mail',
    age: 18,
}, {
    name: 'Josh',
    lastName: 'Foe',
    email: '321@mail',
    age: 20,
}, {
    name: 'Jack',
    lastName: 'Crow',
    email: '456@mail',
    age: 13,
}, {
    name: 'Jane',
    lastName: 'Snow',
    email: '654@mail',
    age: 15,
}];
// users.forEach(function(currentUser) {
//     currentUser.age = 20;
// })

users.forEach(function(currentUser) {
    console.log(currentUser.email)
})

// Метод map()

// map(функция) - принимаеь функцию, выполняет ее на каждом елементе начального масива ив качетсве результата возвращает говий масив с результатом работы callback

const emails = users.map(function(currentValue, index, array) {
    return currentValue.email
}); // [123@mail, 321@mail, 456@mail, 654@mail]


// filter() - фильтрует елементы масива на соответсвие условий

// filter(функция) - создает новий маси, который состоит с елементов начального масива, который "прошел проверку": 
// функция, которую передали методу, возвращает true - елемент прошел
// функция возвращает false - елемент не прошел

const filtered = users.filter(function(currentValue, index, array) {
    return currentValue.age > 18
})

// Task
const res = [4, 5, 6, 7, 8, 10].filter(function(currentNum) {
    return currentNum % 2 === 0
 })

 // Сортирует масив

 // sort(функция) - принимает функцию и сортирует елементы массива соответсвенно результату работы этой функции
 // Мутирует масив(изсеняет начальний)

const arr1 = [7, 5, 23, 1, 2, 4];

 function comparator(a, b) { // сравнивающая функция
    if (a > b) { // если следующий елемент больше чем предыдущий он доложен остаться на места
        return 1;  // на увеличение или return -1  на уменьшение
    } else if (a < b) { // если следующий меньше они поменяються местами
        return -1; // на увеличение или return 1  на уменьшение 
    } else {
        return 0;
    }
}

arr1.sort(comparator)

// ЗадачаЖ отсортировати юзеров за возрастом

users.sort(function(u1, u2) {
    return u1.age - u2.age
});

// Метод reduce() - зводить (сводит) все елементи масива до какого-нибудь одного результата

const arr5 = [3, 4, 5, 6, 7, 8, 9];
const result = arr5.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

// name, lastName, email, age, gender


const USERNAMES = ['John', 'Josh', 'Jane', 'Rick', 'Keyli', 'Li', 'Bill', 'Mark', 'Sten'];
function User(name, lastName, email, age, gender) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.gender = gender;
}

function generateOneUser(){
    const name = USERNAMES[getRandom(0, USERNAMES.length)];
   /* let gender = null;
    if(Math.random() > 0.5) {
        gender = 'male';
    } else {
        gender = 'female';
    }*/ 
    const user = new User(name, 'Doe', `mail${getRandom(0, 100)}@mail.com`, getRandom(10, 100), (Math.random() > 0.5) ? 'male' : 'female');
    return user;
}

function getRandom(min, max) { // генерация рандомного числа в заданном диапазоне
   return Math.floor(Math.random() * (max - min +1) + min);
}
function getUsersArray(dimension) {
    const arr  = new Array(dimension);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = generateOneUser();
    }
    return arr;
}