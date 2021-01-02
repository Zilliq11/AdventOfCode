const contestResponse = input => {
    for (let instruction of input) {
        switch (instruction[0]) {
            case 'N':
            case 'S':
            case 'E':
            case 'W':
                moveDirection(instruction)
                break
            case 'L':
            case 'R':
                rotateShip(instruction)
                break
            case 'F':
                moveForward(instruction)
                break
        }
    }
    result = Math.abs(ship.x) + Math.abs(ship.y)

    return result
}

var ship = {
    facing: 1,
    x: 0,
    y: 0
}

const directions = [
    'north',
    'east',
    'south',
    'west'
]

const moveDirection = moveInstructions => {
    let moveValue = Number(moveInstructions.slice(1))
    switch (moveInstructions[0]) {
        case 'N':
            ship.y += moveValue
            break
        case 'E':
            ship.x += moveValue
            break
        case 'S':
            ship.y -= moveValue
            break
        case 'W':
            ship.x -= moveValue
            break
    }
}

const moveForward = forwardValue => {
    forwardValue = Number(forwardValue.slice(1))
    switch (ship.facing) {
        case 0:
            ship.y += forwardValue
            break
        case 1:
            ship.x += forwardValue
            break
        case 2:
            ship.y -= forwardValue
            break
        case 3:
            ship.x -= forwardValue
            break
    }
}

const rotateShip = rotateInstruction => {
    let rotateDirection = rotateInstruction[0]
    let rotateValue = Number(rotateInstruction.slice(1))

    for (rotateValue;rotateValue !== 0;rotateValue -= 90) {
        switch (rotateDirection) {
            case 'R':
                ship.facing = (ship.facing + 1) % 4
                break
            case 'L':
                ship.facing = (ship.facing - 1) % 4
                break
        }
        ship.facing < 0 ? ship.facing = 3 : null
    }
}

module.exports = contestResponse