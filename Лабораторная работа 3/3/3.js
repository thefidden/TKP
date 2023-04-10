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

function getRandomInt(start, end) {
    return start + Math.ceil(Math.random() * (Math.max(start, end) - Math.min(start, end)))
}

let stack = new Stack()

for(let i = 0; i < 5; ++i)
    stack.insert(getRandomInt(0, 100))

document.writeln(`Стэк: ${stack.getItems().map(item => item.toString()).join(' ')}<br>`)
while(stack.getSize()) {
    document.writeln(`<br>Извлеченный элемент: ${stack.extract()}<br>`)
    document.writeln(`Стэк: ${stack.getItems().map(item => item.toString()).join(' ')}<br>`)
}

