const contestResponse = input => {
    let result = 0
    
    for (const line of input) {
        let [rule, letter, password] = line.split(" ")
        let [min, max] = rule.split("-")
        letter = letter.slice(0, 1)

        if( password[min - 1] === letter ? password[max - 1] !== letter : password[max - 1] === letter ) {
            result += 1    
        }
    }

    return result
}

module.exports = contestResponse