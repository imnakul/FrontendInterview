console.log('Hello world')
console.log('--------------------')

// console.log(window)
// window.console.log('Hello')

// console.dir(window)

// console.dir(document.body)

// console.log('--------------------')
// console.log(document)
// console.dir(document)

// let button = document.getElementById('changeTextBtn')
// console.log(button)

// let button = document.getElementById('changeTextBtn').innerText
// console.log(button)
// console.dir(button)

// let div = document.getElementById('content')
// let div = document.querySelectorAll('#content')
// console.log(div)

// console.log(document.querySelector('#changeTextBtn'))

// document.getElementById('changeTextBtn').addEventListener('click', () => {
//    //send form to backend
//    document.getElementById('content').innerText = 'Clicked'
// })

// let hid = document.getElementById('hidden')
// console.log(hid)

// for (let i = 0; i < 10; i++) {
//    console.log(i + '\n')
// }

let button = document.getElementById('changeTextBtn')
console.log(button)

console.log(button.getAttribute('src'))
// console.log(button.setAttribute('src', 'Bye'))
// console.log(button.getAttribute(src))
console.log(button.style)

let divVariable = document.getElementById('content')
divVariable.remove()
