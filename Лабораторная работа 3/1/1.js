function max(arr) {
    let result = -999999999

    arr.forEach(item => {
        if (result < item)
            result = item
    })

    return result
}

function min(arr) {
    let result = 999999999

    arr.forEach(item => {
        if (result > item)
            result = item
    })

    return result
}

function getRandomInt(limit) {
    return Math.ceil(Math.random() * limit)
}

function sum(arr) {
    let result = 0
    arr.forEach(item => result += item)
    return result
}

function getAverage(arr) {
    return sum(arr) / arr.length
}

function printOdds(arr) {
    arr.forEach((item, index) => {
        if(item % 2)
            document.writeln(`Элемент по индексу ${index} со значением ${item} нечетный<br>`)
    })
}

let arr = []

for (let i = 0; i < 5; ++i)
    arr.push(getRandomInt(100))

document.writeln(`Наибольший элемент массива [${arr}]: ${max(arr)}<br>`)
document.writeln(`Наименьший элемент массива [${arr}]: ${min(arr)}<br>`)
document.writeln(`Сумма элементов массива [${arr}]: ${sum(arr)}<br>`)
document.writeln(`Среднее арифметическое элементов массива [${arr}]: ${getAverage(arr)}<br><br>`)
printOdds(arr)