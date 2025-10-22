// 'use strict';

// Practice - (prototype)

// const person = new Object({
//     name: 'Ruslan',
//     age: 51,
//     greet: function() {
//         console.log('Greet!')
//     }
// })

// Object.prototype.sayHello = function() {
//     console.log('Hello!')
// }
 
// const lena = Object.create(person)
// lena.name = 'Olena'

// const str = new String('I am string')

// console.log(str.sayHello())


// Practice - (this)

function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Ruslan',
    age: 51,
    sayHello: hello
}

console.log(person.sayHello())