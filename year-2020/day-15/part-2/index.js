const contestResponse = input => {

    let turn = 0
    startNumbers = input[0].split(',')
    let game = {}
    let lastNumber
    let wait = true

    while (wait) {
        if (turn % 1000000 === 0) console.log(turn)
        if (turn == 30000000 - 1) wait = false

        //console.log('turn', turn)

        if (turn < startNumbers.length) {
            let startNumber = startNumbers[turn]
            //console.log('start turn', startNumber)
            if (!game[startNumber]) {
                game[startNumber] = {lastTime: turn, previousLastTime: undefined}
            } else {
                game[startNumber].previousLastTime = game[startNumber].lastTime
                game[startNumber].lastTime = turn
            }
            lastNumber = startNumber
            turn++
            continue
        }
        //console.log(game)

        //console.log('fill turn', lastNumber)

        if (!game[lastNumber] || game[lastNumber].previousLastTime === undefined) {
            if (!game[0]) {
                game[0] = {lastTime: turn, previousLastTime: undefined}
            } else {
                game[0].previousLastTime = game[0].lastTime
                game[0].lastTime = turn
            }
            lastNumber = 0
            turn++
            continue
        }
        
        let currentResult = game[lastNumber].lastTime - game[lastNumber].previousLastTime
        if (!game[currentResult]) {
            game[currentResult] = {lastTime: turn, previousLastTime: undefined}
        } else {
            game[currentResult].previousLastTime = game[currentResult].lastTime
            game[currentResult].lastTime = turn
        }
        lastNumber = currentResult

        turn++
    }

    //console.log(game)
    
    return lastNumber
}

module.exports = contestResponse