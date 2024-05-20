const add = function (n1, n2) {
    return n1 + n2
}

const subtract = function (n1, n2) {
    return n1 - n2
}

const sum = function (array) {
    const initialValue = 0
    return array.reduce((acc, curr) => acc + curr, initialValue)
}

const multiply = function (array) {
    const initialValue = 1
    return array.reduce((acc, curr) => acc * curr, initialValue)
}

const power = function (num, power) {
    return Math.pow(num, power)
}

const factorial = function (num) {
    if (num === 1 || num === 0) return 1

    let fact = 1
    for (let i = num; i > 0; i--) {
        console.log(i);
        fact *= i
    }

    return fact
}

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
}
