let getRandomInt = function (start, end) {
    return start + Math.ceil(Math.random() * (Math.max(start, end) - Math.min(start, end)))
}

let pushBackButton = function (list) {
    let elem = getRandomInt(0, 100)
    list.pushBack(elem)

    document.getElementById('List').innerHTML = `Список: ${list.getItemsAsString()}`
    document.getElementById('Elem').innerHTML = `Добавлен в конец списка элемент: ${elem}`
    document.getElementById('indexInput').placeholder = `Номер для удаления (1, ${list.getSize()})`
}

let pushFrontButton = function (list) {
    let elem = getRandomInt(0, 100)
    list.pushFront(elem)

    document.getElementById('List').innerHTML = `Список: ${list.getItemsAsString()}`
    document.getElementById('Elem').innerHTML = `Добавлен в начало списка элемент: ${elem}`
    document.getElementById('indexInput').placeholder = `Номер для удаления (1, ${list.getSize()})`
}

let removeButton = function (list) {
    let index = Number(document.getElementById('indexInput').value) - 1
    if (index < 0 || index >= list.getSize())
        return

    let elem = list.At(index)

    list.remove(index)

    document.getElementById('List').innerHTML = `Список: ${list.getItemsAsString()}`
    document.getElementById('Elem').innerHTML = `Удален из списка элемент: ${elem}`
    document.getElementById('indexInput').placeholder = `Номер для удаления (1, ${list.getSize()})`
}