const contestResponse = input => {
    let result = 0 // my seat number
    let max = 0
    let min = 1000

    let seats = []
    for (let boardingPass of input) {
        let seatValue
        let rowValue = 0
        let colValue = 0
        
        let addingRowValue = 64
        let addingColValue = 4
        for (let letter of boardingPass) {
            switch (letter) {
                case 'B':
                    rowValue += addingRowValue
                    addingRowValue /= 2
                    break
                case 'R':
                    colValue += addingColValue
                    addingColValue /= 2
                    break
                case 'F':
                    addingRowValue /= 2
                    break
                case 'L':
                    addingColValue /= 2
            }
        }
        seatValue = rowValue * 8 + colValue

        min > seatValue ? min = seatValue : null
        max < seatValue ? max = seatValue : null

        seats.push(seatValue)
    }

    let nextSeats = []

    seats.forEach(element => {
        if (element !== min && element !== max) {
            if (!seats.includes(element + 1) || !seats.includes(element - 1)) {
                nextSeats.push(element)
                result = element
            }
        }
    })

    nextSeats[0] > nextSeats[1] ? result = nextSeats[0] - 1 : nextSeats[0] + 1

    return result
}

module.exports = contestResponse