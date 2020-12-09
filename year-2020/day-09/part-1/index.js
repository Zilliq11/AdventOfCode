const contestResponse = input => {
    let result = 0 // number right before infinite loop

    // test 1 preamble = 5
    // test final preamble = 25

    let preamble = 5
    let foundError = false
    let sumIndex = preamble

    while (!foundError) {
        let numbers = input.slice(sumIndex - preamble, sumIndex).map(Number)
        if (!pairExist (Number(input[sumIndex]), numbers)) {
            break
        }
        sumIndex++
    }

    result = input[sumIndex]
    return result
}

function pairExist (sum, numbers) {
    console.log('sum', sum)
    console.log('numbers', numbers)

    for (const number of numbers) {
        let fillNumber = sum - number
        console.log('fillNumber', fillNumber)
        if (numbers.includes(fillNumber) && number !== fillNumber) {
            return true
        }
    }
    return false
}

module.exports = contestResponse