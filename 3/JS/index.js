document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('List').innerHTML = `Список: ${list.getItemsAsString()}`
    document.getElementById('indexInput').placeholder = `Номер для удаления (1, ${list.getSize()})`
})


let list = new List()
for (let i = 0; i < 5; ++i)
    list.pushBack(getRandomInt(0, 100))

