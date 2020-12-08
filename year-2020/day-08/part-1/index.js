const contestResponse = input => {
    let result = 0 // number right before infinite loop

    let currentIndex = 0
    let currentValue = 0
    let executedInstructionsIndexes = []
    
    while (!executedInstructionsIndexes.includes(currentIndex)) {
        executedInstructionsIndexes.push(currentIndex)
        const instruction = input[currentIndex]
        let [code, number] = instruction.split(' ')
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
    result = currentValue
    return result
}

function modifyValue (startValue, toAdd) {
    toAdd[0] === '+' ? startValue += Number(toAdd.slice(1)) : startValue -= Number(toAdd.slice(1))
    return startValue
}

module.exports = contestResponse