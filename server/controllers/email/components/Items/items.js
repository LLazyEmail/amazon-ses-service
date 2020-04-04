const items = require('./item.json');

// console.log(items);

const getItems = () => {
    
    let concatenetedItems = "";
    items.forEach((item) => {
        concatenetedItems += " " + item

    })
    return concatenetedItems
}

module.exports = {
    getItems
}