let getRandomInt = function (start, end) {
    return start + Math.ceil(Math.random() * (Math.max(start, end) - Math.min(start, end)))
}

let insertButton = function (queue) {
    let elem = getRandomInt(0, 100)
    queue.insert(elem)

    document.getElementById('Queue').innerHTML = `Очередь: ${queue.getItemsAsString()}`
    document.getElementById('Elem').innerHTML = `Добавленный элемент: ${elem}`
}

let extractButton = function (queue) {
    if(!queue.getSize())
        return

    let elem = queue.extract()

    document.getElementById('Queue').innerHTML = `Очередь: ${queue.getItemsAsString()}`
    document.getElementById('Elem').innerHTML = `Извлеченный элемент: ${elem}`
}