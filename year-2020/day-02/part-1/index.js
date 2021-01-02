const contestResponse = input => {
    let result = 0
    
    for (const line of input) {
        let [rule, letter, password] = line.split(" ")
        let [min, max] = rule.split("-")
        letter = letter.slice(0, 1)

        const regex =  new RegExp(letter,'g'); // correct way

        var count = (password.match(regex) || []).length;

        if (count <= max && count >= min) {
            result += 1
        }
    }

    return result
}

module.exports = contestResponse