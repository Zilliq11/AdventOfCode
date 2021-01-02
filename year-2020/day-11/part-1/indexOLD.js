const contestResponse = input => {
    let result = 0 // number of occupied seats after chaos is stabilized
    let mapWidth = input[0].length
    let mapHeight = input.length

    let map = []
    console.log(mapWidth)
    console.log(mapHeight)


    let changes = true

    for (let i = 0;i < mapHeight;i++) {
        map[i] = []
        for (let j = 0;j < mapWidth;j++) {
            map[i][j] = input[i][j]
        }
    }

    displayMap(map, mapWidth, mapHeight)

    while (changes) {
        let newMap = []
        changes = false
        for (let i = 0;i < mapHeight;i++) {
            newMap[i] = []
            for (let j = 0;j < mapWidth;j++) {
                switch (map[i][j]) {
                    case 'L':
                        if (checkEmptyAround(i, j, map)) {
                            newMap[i][j] = '#'
                            changes = true
                        } else {
                            newMap[i][j] = 'L'
                        }
                        break
                    case '#':
                        if (checkTooManyPeopleAround(i, j, map)) {
                            newMap[i][j] = 'L'
                            changes = true
                        } else {
                            newMap[i][j] = '#'
                        }
                        break
                    case '.':
                        newMap[i][j] = '.'
                        break
                }
            }
        }
        map = newMap
        //displayMap(map, mapWidth, mapHeight)
    }

    console.log('=================================================================================')

    displayMap(map, mapWidth, mapHeight)

    for (let i = 0;i < mapHeight;i++) {
        result += countOccurrences(map[i], '#')
    }

    return result
}

function checkEmptyAround (x, y, map) {
    if (x===5 && y===0) {console.log('bon test')}
    // check col to the left
    if (x - 1 >= 0) {
        if (y - 1 >= 0) {
            if (map[x-1][y-1] === '#') {
                return false
            }
        }
        if (map[x-1][y] === '#') {
            return false
        }
        if (y + 1 < map.length) {
            if (map[x-1][y+1] === '#') {
                return false
            }
        }
    }

    // check middle col
    if (y - 1 >= 0) {
        if (map[x][y-1] === '#') {
            return false
        }
    }
    if (y + 1 < map.length) {
        if (map[x][y+1] === '#') {
            return false
        }
    }

    // check col to the right
    if (x + 1 < map[0].length) {
        if (y - 1 >= 0) {
            if (map[x+1][y-1] === '#') {
                return false
            }
        }
        if (map[x+1][y] === '#') {
            return false
        }
        if (y + 1 < map.length) {
            if (map[x+1][y+1] === '#') {
                return false
            }
        }
    }
    return true
}

function checkTooManyPeopleAround (x, y, map) {
    let count = 0

    // check line to the left
    if (x - 1 >= 0) {
        if (y - 1 >= 0) {
            if (map[x-1][y-1] === '#') {
                count++
            }
        }
        if (map[x-1][y] === '#') {
            count++
        }
        if (y + 1 < map.length) {
            if (map[x-1][y+1] === '#') {
                count++
            }
        }
    }

    // check middle line
    if (y - 1 >= 0) {
        if (map[x][y-1] === '#') {
            count++
            if (count >= 4) {
                return true
            }
        }
    }
    if (y + 1 < map.length) {
        if (map[x][y+1] === '#') {
            count++
            if (count >= 4) {
                return true
            }
        }
    }

    // check line to the right
    if (x + 1 < map[0].length) {
        if (y - 1 >= 0) {
            if (map[x+1][y-1] === '#') {
                count++
                if (count >= 4) {
                    return true
                }
            }
        }
        if (map[x+1][y] === '#') {
            count++
            if (count >= 4) {
                return true
            }
        }
        if (y + 1 < map.length) {
            if (map[x+1][y+1] === '#') {
                count++
                if (count >= 4) {
                    return true
                }
            }
        }
    }
    return false
}

function displayMap(map, mapWidth, mapHeight) {
    for (let i = 0;i < mapHeight;i++) {
        let toDisplay = ''
        for (let j = 0;j < mapWidth;j++) {
            toDisplay += map[i][j]
        }
        console.log(toDisplay)
    }
    console.log('====================================================')
}

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

module.exports = contestResponse

// 2379 too high