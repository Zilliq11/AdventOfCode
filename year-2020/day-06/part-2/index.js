const contestResponse = input => {
    let result = 0 // number of yes answered on the flight
    let yesAnswered = []
    let personIndex = 0
    let common = []
    for (const person of input) {
        if (person === ';') {
            result += yesAnswered.length
            yesAnswered = []
            personIndex = 0
            continue
        }
        for (const answer of person) {
            if (personIndex === 0) {
                common.push(answer)
            } else {
                if (yesAnswered.includes(answer)) {
                    common.push(answer)
                }
            }
        }
        yesAnswered = common
        common = []
        personIndex++
    }
    result += yesAnswered.length
    return result
}

module.exports = contestResponse