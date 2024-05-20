const reverseString = function (string) {
    const originalString = string
    let newOne = ''

    for (let i = string.length - 1; i >= 0; i--) {
        newOne += string[i]
    }

    return newOne
}

// Do not edit below this line
module.exports = reverseString
