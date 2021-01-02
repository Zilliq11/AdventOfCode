const contestResponse = input => {
    let result = 0 // weaknessNumber

    // test 1 invalidNumber = 127
    // test final invalidNumber = 1124361034
    const invalidNumber = Number(input[0])
    let data = input.slice(2)
    let startIndex = 0
    let index = startIndex + 1
    let foundWeakness = false
    let min = Number(data[startIndex])
    let max = Number(data[startIndex])

    while (!foundWeakness) {
        if (contiguousSum(startIndex, index, data) === invalidNumber) {
            foundWeakness = true
            if (min > Number(data[index])) {
                min = Number(data[index])
            }
            if (max < Number(data[index])) {
                max = Number(data[index])
            }
            break
        }
        if (min > Number(data[index])) {
            min = Number(data[index])
        }
        if (max < Number(data[index])) {
            max = Number(data[index])
        }
        index++
        if (data[index] === undefined) {
            startIndex++
            index = startIndex + 1
            min = Number(data[startIndex])
            max = Number(data[startIndex])
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