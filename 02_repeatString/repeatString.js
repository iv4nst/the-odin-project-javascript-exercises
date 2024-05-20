const repeatString = function (string, number) {
    if (number < 0) return 'ERROR'

    let str = ''

    for (let i = 1; i <= number; i++) {
        str += string
    }
    return str
}

// Do not edit below this line
module.exports = repeatString
