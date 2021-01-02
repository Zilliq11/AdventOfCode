const contestResponse = input => {
    let result = 0 // result of the multiplication of 1 and 3-difference count

    let adapters = input.map(Number)
    let jolts = 0
    let numberOf1 = 0
    let numberOf3 = 0

    adapters.sort((a, b) => a - b)

    for (const adapter of adapters) {
        adapter - 1 === jolts ? numberOf1++ : numberOf3++
        jolts = adapter
    }

    result = numberOf1 * (numberOf3 + 1)
    return result
}

module.exports = contestResponse