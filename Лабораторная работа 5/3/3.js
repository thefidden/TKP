class Node {
    constructor(data) {
        this.prev = null
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    pushBack(data) {
        let newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        return this.toArray()
    }

    pushFront(data) {
        let newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        return this.toArray()
    }

    remove(index) {
        let current = this.head;

        for (let i = 0; i < index; ++i)
            current = current.next

        if (current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (current === this.head) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (current === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        return this.toArray()
    }

    toArray() {
        let node = this.head
        let result = []

        while (node) {
            result.push(node.data)
            node = node.next
        }

        return result
    }
}

let getRandomInt = function (start, end) {
    return start + Math.ceil(Math.random() * (Math.max(start, end) - Math.min(start, end)))
}

// Создание списка
let list = new LinkedList()

// Добавление элементов в список: сначала в конец, потом в начало
let actions = [(number) => list.pushBack(number), (number) => list.pushFront(number)]
actions.forEach(action => {
    for (let i = 0; i < 5; ++i) {
        let value = getRandomInt(-50, 50)
        action(value)

        document.writeln(`Новый элемент: ${value}<br>`)

        document.writeln(`Список: `)
        list.toArray().forEach(item => {
            document.writeln(`${item} `)
        })

        document.writeln(`<br><br>`)
    }
})

// Удаление элементов из списка
for (let i = 0; i < 3; ++i) {
    let indexToRemove = getRandomInt(0, list.toArray().length - 1)

    document.writeln(`Удаление элемента под индексом ${indexToRemove}<br>`)

    document.writeln(`Список: `)
    list.remove(indexToRemove).forEach(item => {
        document.writeln(`${item} `)
    })

    document.writeln(`<br><br>`)
}
