const fibonacci = function (number) {
    // 1 1 2 3 5 8 13 21
    let count = 0

    if (typeof number !== 'number') {
        count = parseInt(number)
    } else {
        count = number
    }

    if (count < 0) return 'OOPS'
    if (count == 0) return 0

    let firstPrev = 1
    let secondPrev = 0

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev
        secondPrev = firstPrev
        firstPrev = current
    }

    return firstPrev
}

// Do not edit below this line
module.exports = fibonacci
