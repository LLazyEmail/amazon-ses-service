const getItems = () => {
    const items = ["cat", "dog"];
    let concatenetedItems = "";
    items.forEach((item) => {
        concatenetedItems += " " + item

    })
    return concatenetedItems
}

module.exports = {
    getItems
}