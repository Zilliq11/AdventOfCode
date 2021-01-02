const contestResponse = input => {
    let result = 0 // number of occupied seats

    const cells = {
        occupied: '#',
        free: 'L',
        floor: '.'
    }

    const mapHeight = map => map.length
    const mapWidth = map => map[0].length

    const evolve = map => map.map((row, y) => row.map((cell, x) => {
        const nbOccupiedCellsAround = countOccupiedAround(map, x, y)
        if (cell === cells.empty && !nbOccupiedCellsAround) return cells.occupied
        if (cell === cells.occupied && nbOccupiedCellsAround > 3) return cells.empty
        return cell
    }))

    const countOccupiedAround = (grid, x, y) => {
        const gridHeight = mapHeight(grid)
        const gridWidth = mapWidth(grid)

        let count = 0

        for (let dx = -1;dx < 2;dx++) {
            const newX = x + dx
            if (newX < 0 || newX >= mapWidth) {
                continue
            }
            for (let dy = -1;dy < 2;dy++) {
                const newY = y + dy
                if (newY < 0 || newY >= mapHeight) continue
                if (dx === 0 && dy === 0) continue
                if (grid[newY][newX] === cells.occupied) count++
                console.log(x, y)
            }
        }
        return count
    }

    const hash = map => map.map(row => row.join('')).join('')

    let grid = input.map(line => line.split(''))
    console.log(grid)
    let gridHash = hash(grid)

    while (true) {
        const newGrid = evolve(grid)
        const newHash = hash(newGrid)

        if (newHash === gridHash) break
        gridHash = newHash
        grid = newGrid
        console.log('boucle')
    }

    result = gridHash.match(/#/g).length

    return result
}

module.exports = contestResponse

// 2379 too high