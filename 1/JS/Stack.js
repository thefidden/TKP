function Stack() {
    this.arr = []
}

Stack.prototype.insert = function (item) {
    this.arr.push(item)
}

Stack.prototype.extract = function () {
    return this.arr.pop()
}

Stack.prototype.getSize = function () {
    return this.arr.length
}

Stack.prototype.getItems = function () {
    return this.arr
}

Stack.prototype.getItemsAsString = function () {
    return this.getItems().map(item => item.toString()).join(' ')
}