const contestResponse = input => {
    let result = 0
    
    for (const line of input) {
        let split = line.split(" ")
        let min = split[0].split("-")[0]
        let max = split[0].split("-")[1]
        let letter = split[1].split(":")[0]
        let password = split[2]

        if( password[min - 1] === letter ? password[max - 1] !== letter : password[max - 1] === letter ) {
            result += 1
            
        }
    }

    return result
}

module.exports = contestResponse