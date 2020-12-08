const contestResponse = input => {
    let result = 0
    
    for (const line of input) {
        let split = line.split(" ")
        let min = split[0].split("-")[0]
        let max = split[0].split("-")[1]
        let letter = split[1].split(":")[0]
        let password = split[2]

        const regex =  new RegExp(letter,'g'); // correct way

        var count = (password.match(regex) || []).length;

        if (count <= max && count >= min) {
            result += 1
        }
    }

    return result
}

module.exports = contestResponse