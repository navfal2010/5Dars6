let first = prompt('enter body backgroundColor')
let second = prompt('enter text color')

let Body = document.querySelector('body')
let text = document.querySelector('.website__text')

Body.style.backgroundColor = first
text.style.color = second
