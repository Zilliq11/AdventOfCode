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

    while (input[index] !== 'nearby tickets:') index++

    for (let i = index + 1;i < input.length;i++) {
        let line = input[i].split(',').map(Number)
        for (const number of line) {
            let found = false
            for (const range of globalRanges) {
                if (range.min <= number && range.max >= number) {
                    found = true
                    break
                }
            }
            if (!found) sumOfErrors += number
        }
    }
    
    console.log(sumOfErrors)
    
    return sumOfErrors
}

module.exports = contestResponse