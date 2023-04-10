function Node(data) {
    this.prev = null
    this.data = data
    this.next = null
}

function List() {
    this.head = null
    this.tail = null
}

List.prototype.getSize = function () {
    return this.toArray().length
}

List.prototype.pushBack = function (data) {
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

List.prototype.toArray = function () {
    let node = this.head
    let result = []

    while (node) {
        result.push(node.data)
        node = node.next
    }

    return result
}

List.prototype.remove = function (index) {
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

List.prototype.pushFront = function (data) {
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

List.prototype.getItemsAsString = function () {
    return this.toArray().map(item => item.toString()).join(' ')
}

List.prototype.At = function (index) {
    return this.toArray()[index]
}