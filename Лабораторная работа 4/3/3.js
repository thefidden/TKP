class Queue {
    constructor() {
        this.arr = []
    }

    insert(item) {
        this.arr.push(item)
    }

    extract() {
        let result = this.arr[0]
        this.arr.shift()
        return result
    }

    getSize() {
        return this.arr.length
    }

    getItems() {
        return this.arr
    }
}

class Stack {
    constructor() {
        this.arr = []
    }

    insert(item) {
        this.arr.push(item)
    }

    extract() {
        return this.arr.pop()
    }

    getSize() {
        return this.arr.length
    }

    getItems() {
        return this.arr
    }
}

let getRandomInt = function (start, end) {
    return start + Math.ceil(Math.random() * (Math.max(start, end) - Math.min(start, end)))
}

// Очередь
document.writeln(`<h1>Очередь</h1>`)
let queue = new Queue()

for (let i = 0; i < 5; ++i)
    queue.insert(getRandomInt(0, 100))

document.writeln(`Очередь: ${queue.getItems().map(item => item.toString()).join(' ')}<br>`)
while (queue.getSize()) {
    document.writeln(`<br>Извлеченный элемент: ${queue.extract()}<br>`)
    document.writeln(`Очередь: ${queue.getItems().map(item => item.toString()).join(' ')}<br>`)
}

// Стэк
document.writeln(`<h1>Стэк</h1>`)
let stack = new Stack()

for (let i = 0; i < 5; ++i)
    stack.insert(getRandomInt(0, 100))

document.writeln(`Стэк: ${stack.getItems().map(item => item.toString()).join(' ')}<br>`)
while (stack.getSize()) {
    document.writeln(`<br>Извлеченный элемент: ${stack.extract()}<br>`)
    document.writeln(`Стэк: ${stack.getItems().map(item => item.toString()).join(' ')}<br>`)
}
