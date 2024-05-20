const removeFromArray = function (array, ...toRemove) {
    const newArray = []

    array.forEach((item) => {
        if (!toRemove.includes(item)) {
            newArray.push(item)
        }
    })

    return newArray
}

// Do not edit below this line
module.exports = removeFromArray
