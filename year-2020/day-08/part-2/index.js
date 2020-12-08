const contestResponse = input => {
    let result = 0 // number right before infinite loop
    let found = false
    let changesTried = []
    let currentValue

    while (!found) {
        let changed = false
        let currentIndex = 0
        let executedInstructionsIndexes = []
        currentValue = 0

        while (!executedInstructionsIndexes.includes(currentIndex)) {
            executedInstructionsIndexes.push(currentIndex)
            const instruction = input[currentIndex]
            if (instruction === undefined) {
                found = true
                break
            }
            let [code, number] = instruction.split(' ')
            if (!changed && (code === 'nop' || code === 'jmp') && !changesTried.includes(currentIndex)) {
                changed = true
                changesTried.push(currentIndex)
                if (code === 'nop') {
                    currentIndex = modifyValue(currentIndex, number)
                } else {
                    currentIndex++
                }
            } else {
                switch (code) {
                    case 'jmp':
                        currentIndex = modifyValue(currentIndex, number)
                        break
                    case 'acc':
                        currentValue = modifyValue(currentValue, number)
                    case 'nop':
                        currentIndex++
                }
            }
        }
    }

    
    result = currentValue
    return result
}

function modifyValue (startValue, toAdd) {
    toAdd[0] === '+' ? startValue += Number(toAdd.slice(1)) : startValue -= Number(toAdd.slice(1))
    return startValue
}

module.exports = contestResponse