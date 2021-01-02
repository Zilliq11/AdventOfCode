const contestResponse = input => {
    let result = 0 // number of different ways to arrange the adapters
    const end = input.length

    let adapters = input.map(Number)
    let jolts = 0

    adapters.sort((a, b) => a - b)

    result = finish (jolts , adapters, end)

    return result
}

var cache = []

function finish (current, rest, end) {
    if (current === end - 1) {
        return 1
    }

    let scopedResult = 0
    let currentValue = rest[0]
    let nextData = rest.slice(1, 4)

    nextData.forEach((value, index) => {
        if (value - currentValue < 4) {
            let next = 0
            if (cache[current + 1 + index] != undefined) {
                next = cache[current + 1 + index]
            } else {
                next = finish(current + 1 + index , rest.slice(1 + index), end)
            }
            scopedResult += next
            cache[current + 1 + index] = next
        }
    });
    if ((scopedResult%10000) === 0) {
    }
    return scopedResult
}

module.exports = contestResponse