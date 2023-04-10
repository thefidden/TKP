let add = function(a, b) {
    return a + b
}

let subtract = function(a, b) {
    return a - b
}

let multiply = function(a, b) {
    return a * b
}

let divide = function(a, b) {
    if(b === 0)
        throw new Error('Division by 0')
    return a / b
}

let a = prompt('Введите значение A')
let b = prompt('Введите значение B')

document.writeln(`${a} + ${b} = ${add(a, b)}<br>`)
document.writeln(`${a} - ${b} = ${subtract(a, b)}<br>`)
document.writeln(`${a} * ${b} = ${multiply(a, b)}<br>`)
document.writeln(`${a} / ${b} = ${divide(a, b)}<br>`)

try {
    document.writeln(`${a} / ${0} = ${divide(a, 0)}<br>`)
}
catch(error) {
    document.writeln(error)
}
