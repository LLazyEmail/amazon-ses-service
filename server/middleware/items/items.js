const items = require('./item.json');

// console.log(items);

const getItems = () => {

    let concatenetedItems = "";
    items.forEach((item) => {
        concatenetedItems += `
        <li>
            <div>${item.title}</div>
            <div>${item.link}</div>
            <div>${item.excerpt}</div>
            <div>${item.author}</div>
        </li>
        `
    })
    return concatenetedItems
}

module.exports = {
    getItems
}
