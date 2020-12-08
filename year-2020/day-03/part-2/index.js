const contestResponse = input => {
    let result = 1 //nb of trees hit
    let sizeX = input[0].length
    let sizeY = input.length
    
    const scenarios = [
        {
            x: 1,
            y: 1
        },
        {
            x: 3,
            y: 1
        },
        {
            x: 5,
            y: 1
        },
        {
            x: 7,
            y: 1
        },
        {
            x: 1,
            y: 2
        }
    ]

    for (const scenario of scenarios) {
        let x = 0
        let y = 0
        let resultScoped = 0

        while (y < sizeY - 1) {
            x += scenario.x
            y += scenario.y

            if (input[y][x % sizeX] === '#') {
                resultScoped +=1
            } 
        }
        result *= resultScoped
    }

    return result
}

module.exports = contestResponse