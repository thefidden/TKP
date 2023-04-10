function Queue() {
    this.arr = []
}

Queue.prototype.insert = function (item) {
    this.arr.push(item)
}

Queue.prototype.extract = function () {
    let result = this.arr[0]
    this.arr.shift()
    return result
}

Queue.prototype.getSize = function () {
    return this.arr.length
}

Queue.prototype.getItems = function () {
    return this.arr
}

Queue.prototype.getItemsAsString = function () {
    return this.getItems().map(item => item.toString()).join(' ')
}