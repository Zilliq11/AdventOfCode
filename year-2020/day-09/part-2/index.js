const contestResponse = input => {
    let result = 0 // weaknessNumber

    // test 1 invalidNumber = 127
    // test final invalidNumber = 1124361034
    const invalidNumber = 1124361034
    let startIndex = 0
    let index = startIndex + 1
    let foundWeakness = false
    let min = Number(input[startIndex])
    let max = Number(input[startIndex])

    while (!foundWeakness) {
        if (contiguousSum(startIndex, index, input) === invalidNumber) {
            foundWeakness = true
            if (min > Number(input[index])) {
                min = Number(input[index])
            }
            if (max < Number(input[index])) {
                max = Number(input[index])
            }
            break
        }
        if (min > Number(input[index])) {
            min = Number(input[index])
        }
        if (max < Number(input[index])) {
            max = Number(input[index])
        }
        index++
        if (input[index] === undefined) {
            startIndex++
            index = startIndex + 1
            min = Number(input[startIndex])
            max = Number(input[startIndex])
        }
    }

    result = min + max
    return result
}

function contiguousSum (startIndex, endIndex, input) {
    let sum = 0
    for (let i = startIndex;i <= endIndex;i++) {
        sum += Number(input[i])
    }
    return sum
}

module.exports = contestResponse