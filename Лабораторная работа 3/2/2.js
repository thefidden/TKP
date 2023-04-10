function getRandomInt(start, end) {
    return start + Math.ceil(Math.random() * (Math.max(start, end) - Math.min(start, end)))
}

let matrix = []
for (let line = 0; line < 5; ++line) {
    matrix.push([])
    for (let index = 0; index < 5; ++index)
        matrix[matrix.length - 1].push(getRandomInt(-10, 10))
}

document.writeln('До изменений<br>')
matrix.forEach(line => {
    document.writeln(`${line.map(item => item.toString().padEnd(5, '\xa0\xa0')).join('')}<br>`)
})

for (let index = 0; index < matrix.length; ++index)
    if (matrix[index][index] < 0)
        matrix[index][index] = 0
    else
        matrix[index][index] = 1

document.writeln('<br>После изменений<br>')
matrix.forEach(line => {
    document.writeln(`${line.map(item => item.toString().padEnd(5, '\xa0\xa0')).join('')}<br>`)
})

