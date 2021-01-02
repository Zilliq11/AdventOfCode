const contestResponse = input => {
    const earliestBusDeparture = input[0]
    const busSchedules = input[1].split(',')

    const timeToWaitForBus = lineNumber => lineNumber - (earliestBusDeparture % lineNumber)

    let minimalTimeToWait = -1
    let busLineChosen = -1

    for (const busLine of busSchedules) {
        if (busLine === 'x') continue
        let timeToWait = timeToWaitForBus(busLine)
        if (minimalTimeToWait === -1 || timeToWait < minimalTimeToWait) {
            minimalTimeToWait = timeToWait
            busLineChosen = busLine
        }
    }

    result = minimalTimeToWait * busLineChosen

    return result
}

module.exports = contestResponse