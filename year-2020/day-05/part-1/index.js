const contestResponse = input => {
    let result = 0 // highest seat number

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

        seatValue > result ? result = seatValue : null
    }

    return result
}

module.exports = contestResponse