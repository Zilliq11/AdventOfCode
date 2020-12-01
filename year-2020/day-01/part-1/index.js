const contestResponse = input => {
    const entries = input.map(Number)
    
    let result
    
    for (const element of entries) {
        let rest = entries.indexOf(2020 - element)
        if (rest > -1) {
            result = element * entries[rest]
            break
        }
    }

    return result
}

module.exports = contestResponse