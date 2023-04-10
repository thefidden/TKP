let sum = function (numbers) {
    let result = 0
    numbers.forEach(number => result += number)
    return result
}

let getRandomInt = function (start, end) {
    if (start > end)
        [start, end] = [end, start]

    return start + Math.floor(Math.random() * (end - start))
}

let getNumberSign = function (number) {
    if (number < 0)
        return '-'
    else if (number > 0)
        return '+'
    return ''
}

let checkDivision = function (number, divisor) {
    // Правила деления
    const checks = {
        2: (number) => number % 2 === 0, // Правило деления на 2
        3: (number) => sum(number.toString().split('').map(number => Number(number))) % 3 === 0, // Правило деления на 3
        6: (number) => checkDivision(number, 2) === true && checkDivision(number, 3) === true, // Правило деления на 6
        9: (number) => sum(number.toString().split('').map(number => Number(number))) % 9 === 0 // Правило деления на 9
    }

    return checks[divisor](number)
}

let isPrime = function (number) {
    if (number <= 1)
        return false

    for (let divisor = 2; divisor <= Math.sqrt(number); ++divisor)
        if (number % divisor === 0)
            return false

    return true
}

let task1 = function () {
    document.writeln(`<h2>Task 1</h2>`)

    const numbers = Array.from({length: 5}, () => getRandomInt(-5, 6))
    const answers = {
        '+': 'число положительное',
        '-': 'число отрицательное',
        '': 'число равно 0'
    }

    numbers.forEach(number => {
        document.writeln(`${number}: ${answers[getNumberSign(number)]} <br>`)
    })
}
let task2 = function () {
    document.writeln(`<h2>Task 2</h2>`)

    const numbers = Array.from({length: 4}, () => getRandomInt(0, 101))
    const divisors = [2, 3, 6, 9]

    numbers.forEach(number => {
        document.writeln(`Число ${number}<br>`);

        divisors.forEach(divisor => {
            document.writeln(`${'\xa0'.repeat(8)}• Делится на ${divisor}: ${checkDivision(number, divisor)}<br>`)
        });

        document.writeln('<br>');
    })
}

let task3 = function () {
    document.writeln(`<h2>Task 3</h2>`)

    let primeNumbers = []
    const randomNumbers = Array.from({length: 5}, () => getRandomInt(2, 100))

    while (primeNumbers.length < 5) {
        let number = getRandomInt(1, 100)
        if (isPrime(number))
            primeNumbers.push(number)
    }

    const shuffledNumbers = primeNumbers.concat(randomNumbers).sort(() => Math.random() - 0.5)

    shuffledNumbers.forEach(number => {
        document.writeln(`Число ${number}: `)

        if (isPrime(number))
            document.writeln(`простое`)
        else
            document.writeln(`составное`)

        document.writeln(`<br>`)
    })
}

task1()
task2()
task3()
