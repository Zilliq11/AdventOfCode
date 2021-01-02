const contestResponse = input => {
    const earliestBusDeparture = input[0]
    const busSchedules = input[1].split(',')

    const timeToWaitForBus = (lineNumber, startTime) => {
        const busPassedAgo = startTime % Number(lineNumber)
        if (busPassedAgo === 0) return 0
        return lineNumber - busPassedAgo
    }

    let max = 0

    for (const busLine of busSchedules) {
        if (busLine === 'x') {
            continue
        }
        max < Number(busLine) ? max = Number(busLine) : null
    }

    const maxIndex = busSchedules.indexOf(String(max))

    let time = 0
    let timeMax = 0

    while (true) {
        let difference = 0
        timeMax += max
        time = timeMax - maxIndex
        let calcul = time % Number(busSchedules[0])
        if (calcul !== 0) continue
        let found = true
        for (const busLine of busSchedules) {
            if (busLine === 'x') {
                difference++
                continue
            }
            let timeToWait = timeToWaitForBus(busLine, time)
            if (timeToWait === difference) {
                difference++
                continue
            }
            found = false
            break
        }
        if (found) break
    }

    result = time

    return result
}

module.exports = contestResponse