const contestResponse = input => {
    let result = 0 //nb of passport valid
    let index = 0

    const values = {
        byr: 10000000,
        iyr: 1000000,
        eyr: 100000,
        hgt: 10000,
        hcl: 1000,
        ecl: 100,
        pid: 10,
        cid: 1
    }

    const eyeColors = {
        'amb': true,
        'blu': true,
        'brn': true,
        'gry': true,
        'grn': true,
        'hzl': true,
        'oth': true,
    }

    let currentPassportValue = 0

    while (true) {
        if (input[index] === ';' || input[index] === undefined) {
            if (currentPassportValue >= 11111110) {
                result++
            }
            currentPassportValue = 0
            index++
            if (input[index] === undefined) {
                break
            }
            continue
        }
        
        const fields = input[index].split(' ')
        for (const field of fields) {
            let code = field.split(':')[0]
            let value = field.split(':')[1]
            switch (code) {
                case 'byr':
                    if (Number(value) <= 2002 && Number(value) >= 1920) {
                        currentPassportValue += values[code]
                    }
                    break

                case 'iyr':
                    if (Number(value) <= 2020 && Number(value) >= 2010) {
                        currentPassportValue += values[code]
                    }
                    break

                case 'eyr':
                    if (Number(value) <= 2030 && Number(value) >= 2020) {
                        currentPassportValue += values[code]
                    }
                    break

                case 'hgt':
                    if (value.endsWith('cm')) {
                        let currentValue = value.split('cm')[0]
                        if (Number(currentValue) <= 193 && Number(currentValue) >= 150) {
                            currentPassportValue += values[code]
                        }
                    } else {
                        let currentValue = value.split('in')[0]
                        if (Number(currentValue) <= 76 && Number(currentValue) >= 59) {
                            currentPassportValue += values[code]
                        }
                    }
                    break

                case 'hcl':
                    if (value[0] !== '#') {
                        break
                    }
                    let color = value.split('#')
                    if (color[1].length !==  6 ) {
                        break
                    }
                    for (const letter of color) {
                        if (letter >= '0' && letter <= '9' || letter >= 'a' && letter <= 'f') {
                            continue
                        } else {
                            break
                        }
                    }
                    currentPassportValue += values[code]
                    break

                case 'ecl':
                    if (eyeColors[value]) {
                        currentPassportValue += values[code]
                    }
                    break

                case 'pid':
                    if (!isNaN(value) && value.length === 9) {
                        currentPassportValue += values[code]
                    }
            }
        }

        index++
    }

    return result
}

module.exports = contestResponse