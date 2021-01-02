const { ok } = require("should")

const contestResponse = input => {
    const earliestBusDeparture = input[0]
    const busSchedules = input[1].split(',')

    let buses =[]
    busSchedules.forEach((busLine, index) => {
        if (busLine !== 'x') {
            buses.push({index: index, line: Number(busLine)})   
        }
    })

    //console.log(buses)

    let increment = buses[0].line
    let time = 0

    for (let busIndex = 1;busIndex < buses.length;busIndex++) {
        const currentBus = buses[busIndex]
        console.log(currentBus)
        while (true) {
            //if (time % buses[busIndex].line === buses[busIndex].index) {
            if ((time + currentBus.index) % buses[busIndex].line === 0) {
            console.log(time)
                console.log('est un multiple de', buses[busIndex].line)
                break
            }
            time += increment
        }
        increment *= buses[busIndex].line
    }

    return time
/*
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
    let increment = Number(busSchedules[0])

    let ok = []

    while (true) {
        let difference = 0
        time += increment
        /*let calcul = time % Number(busSchedules[0])
        if (calcul !== 0) continue
        let found = true
        console.log(time)
        for (const busLine of busSchedules) {
            if (busLine === 'x' || ok.includes(busLine)) {
                difference++
                continue
            }
            let timeToWait = timeToWaitForBus(busLine, time)
            if (timeToWait === difference) {
                increment *= Number(busLine)
                ok.push(busLine)
                difference++
                continue
            }
            found = false
            break
        }
        if (found) break
    }

    result = time

    return result*/
}

module.exports = contestResponse