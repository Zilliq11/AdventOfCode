const contestResponse = input => {
    let result = 0 // number of yes answered on the flight
    let yesAnswered = []
    for (const answer of input) {
        if (answer === ';') {
            yesAnswered = []
            continue
        }
        for (const person of answer) {
            if (!yesAnswered.includes(person)) {
                yesAnswered.push(person)
                result++
            }
        }
    }
    return result
}

module.exports = contestResponse