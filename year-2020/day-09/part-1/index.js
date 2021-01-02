const contestResponse = input => {
    let result = 0 // number right before infinite loop

    // test 1 preamble = 5
    // test final preamble = 25

    let preamble = input[0]
    let foundError = false
    let sumIndex = preamble
    
    let data = input.slice(2)

    while (!foundError) {
        let numbers = data.slice(sumIndex - preamble, sumIndex).map(Number)
        if (!pairExist (Number(data[sumIndex]), numbers)) {
            break
        }
        sumIndex++
    }

    result = data[sumIndex]
    return result
}

function pairExist (sum, numbers) {
    for (const number of numbers) {
        let fillNumber = sum - number
        if (numbers.includes(fillNumber) && number !== fillNumber) {
            return true
        }
    }
    return false
}

module.exports = contestResponse