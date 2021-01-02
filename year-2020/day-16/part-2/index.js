const contestResponse = input => {
    
    // extracting field ranges
    let currentLine = 0
    var ranges = []
    while (input[currentLine] !== ';') {
        let field = input[currentLine]
        let [fieldName, fieldValues] = field.split(': ')
        
        fieldValues = fieldValues.split(' or ')
        let secondFieldValues = fieldValues[1].split('-').map(Number)
        fieldValues = fieldValues[0].split('-').map(Number)

        ranges.push({
            field: fieldName,
            fieldRanges: [
                {
                    min: fieldValues[0],
                    max: fieldValues[1]
                },
                {
                    min: secondFieldValues[0],
                    max: secondFieldValues[1]
                },
            ]
        })
        currentLine++
    }
    // ranges extracted

    // global ranges
    var globalRanges = []
    globalRanges.push({min: ranges[0].fieldRanges[0].min, max: ranges[0].fieldRanges[0].max})
    for (const range of ranges) {
        // on itère sur les range sorties de l'input
        for (let i = 0;i < range.fieldRanges.length;i++) {
            let min = range.fieldRanges[i].min
            let max = range.fieldRanges[i].max
            // on itère sur les deux ranges du field
            let found = false
            for (const globalRange of globalRanges) {
                //on itère sur les global ranges pour agrandir la première qui correspond
                if (max < globalRange.min) {
                    continue
                }
                if (max === globalRange.min) {
                    globalRange.min = min
                    found = true
                    break
                }
                if (min > globalRange.max) {
                    continue
                }
                if (min === globalRange.max) {
                    globalRange.max = max
                    found = true
                    break
                }
                if (max <= globalRange.max && max >= globalRange.min) {
                    if (min < globalRange.min) {
                        globalRange.min = min
                        found = true
                        break
                    }
                    continue
                }
                if (min <= globalRange.max && min >= globalRange.min) {
                    if (max > globalRange.max) {
                        globalRange.max = max
                        found = true
                        break
                    }
                    continue
                }
                if (max >= globalRange.max && min <= globalRange.min) {
                    globalRange.min = min
                    globalRange.max = max
                    found = true
                    break
                }
            }
            if (!found) {
                globalRanges.push({min: min, max: max})
            }
        }
    }

    let sumOfErrors = 0
    let index = 0
    let goodTickets = []

    while (input[index] !== 'your ticket:') index++

    let myTicket = input[index + 1]

    while (input[index] !== 'nearby tickets:') index++

    for (let i = index + 1;i < input.length;i++) {
        let line = input[i].split(',').map(Number)
        let badTicket = false
        for (const number of line) {
            let found = false
            for (const range of globalRanges) {
                if (range.min <= number && range.max >= number) {
                    found = true
                    break
                }
            }
            if (!found) {
                badTicket = true
            }
        }
        if (!badTicket) {
            goodTickets.push(line)
        }
    }

    //console.log(goodTickets)
    //console.log(ranges)

    let links = []
    let alreadyFound = []

    for (let i = 0;i < ranges.length;i++) {
        let possibility = []
        let working = true
        for (let j = 0;j < goodTickets[0].length;j++) {
            if (alreadyFound.includes(j)) continue
            working = true
            for (let k = 0;k < goodTickets.length;k++) {
                let found = false
                for (const range of ranges[i].fieldRanges) {
                    if (range.min <= goodTickets[k][j] && range.max >= goodTickets[k][j]) {
                        found = true
                        break
                    }
                }
                if (!found) {
                    working = false
                    break
                }
            }
            if (working) {
                links.push({field: i, ticketValue: j})
                //alreadyFound.push(j)
            }
        }
    }

    //console.log(links)
    console.log('==============================')
    let knownRange = []
    let takenTicketValues = []
    let takenFields = []

    for (let p = 0;p < 7;p++) {
        for (let i = 0;i < ranges.length;i++) {
            if (takenFields.includes(i)) continue
            let rangeNumber = 0
            for (const link of links) {
                if (takenTicketValues.includes(link.ticketValue)) continue
                if (link.field === i) rangeNumber++
            }
            if (rangeNumber === 1) {
                knownRange.push({ticketField: i, ticketIndex: links.find(element => element.field === i && !takenTicketValues.includes(element.ticketValue)).ticketValue})
                takenTicketValues.push(links.find(element => element.field === i && !takenTicketValues.includes(element.ticketValue)).ticketValue)
                takenFields.push(i)
            }
        }
        links.filter(element => {
            if (takenTicketValues.includes(element.ticketValue)) return false
            return true
        })
    }

    //console.log(myTicket)
    myTicket = myTicket.split(',').map(Number)
    console.log(myTicket)
    console.log(knownRange)
    let result = 1

    for (let i = 0;i < 6;i++) {
        console.log(knownRange.find(element => element.ticketField === i))
        result *= myTicket[knownRange.find(element => element.ticketField === i).ticketIndex]
    }

    //console.log(links)
    console.log('==============================')
    //console.log(knownRange)
    //console.log(takenTicketValues)
    
    return result
}

module.exports = contestResponse