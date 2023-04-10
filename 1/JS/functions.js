let getRandomInt = function (start, end) {
    return start + Math.ceil(Math.random() * (Math.max(start, end) - Math.min(start, end)))
}

let insertButton = function (stack) {
    let elem = getRandomInt(0, 100)
    stack.insert(elem)

    document.getElementById('Stack').innerHTML = `Стэк: ${stack.getItemsAsString()}`
    document.getElementById('Elem').innerHTML = `Добавленный элемент: ${elem}`
}

let extractButton = function (stack) {
    if(!stack.getSize())
        return

    let elem = stack.extract()

    document.getElementById('Stack').innerHTML = `Стэк: ${stack.getItemsAsString()}`
    document.getElementById('Elem').innerHTML = `Извлеченный элемент: ${elem}`
}