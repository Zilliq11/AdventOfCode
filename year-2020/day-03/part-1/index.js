const contestResponse = input => {
    let result = 0 //nb of trees hit
    let sizeX = input[0].length
    let sizeY = input.length
    let x = 0
    let y = 0

    while (y < sizeY - 1) {
        x += 3
        y += 1

        if (input[y][x % sizeX] === '#') {
            result +=1
        } 
    }

    return result
}

module.exports = contestResponse