const contestResponse = input => {
    const entries = input.map(Number)
    
    let result
    
    for (const element1 of entries) {
        for (const element2 of entries) {
            let rest = entries.indexOf(2020 - element1 - element2)
            if (rest > -1) {
                result = element1 * element2 * entries[rest]
                break
            }
        }
    }

    return result
}

module.exports = contestResponse