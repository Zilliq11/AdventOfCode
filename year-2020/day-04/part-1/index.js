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
            currentPassportValue += values[field.split(':')[0]]
        }

        index++
    }

    return result
}

module.exports = contestResponse