var ship = {
    facing: 1,
    x: 0,
    y: 0
}

var waypoint = {
    x: 10,
    y: 1
}

const contestResponse = input => {

    for (let instruction of input) {
        switch (instruction[0]) {
            case 'N':
            case 'S':
            case 'E':
            case 'W':
                moveWaypoint(instruction)
                break
            case 'L':
            case 'R':
                rotateWaypoint(instruction)
                break
            case 'F':
                moveForward(instruction)
                break
        }
    }
    result = Math.abs(ship.x) + Math.abs(ship.y)

    return result
}

const directions = [
    'north',
    'east',
    'south',
    'west'
]

const moveWaypoint = moveInstructions => {
    let moveValue = Number(moveInstructions.slice(1))
    switch (moveInstructions[0]) {
        case 'N':
            waypoint.y += moveValue
            break
        case 'E':
            waypoint.x += moveValue
            break
        case 'S':
            waypoint.y -= moveValue
            break
        case 'W':
            waypoint.x -= moveValue
            break
    }
}

const moveForward = forwardValue => {
    forwardValue = Number(forwardValue.slice(1))
    for (let i = 0;i < forwardValue;i++) {
        ship.x += waypoint.x
        ship.y += waypoint.y
    }
}

const rotateWaypoint = rotateInstruction => {
    console.log(rotateInstruction)
    let rotateDirection = rotateInstruction[0]
    let rotateValue = Number(rotateInstruction.slice(1))
    for (rotateValue;rotateValue !== 0;rotateValue -= 90) {
        let newWaypoint = {
            x: 0,
            y: 0
        }
        console.log(waypoint)
        switch (rotateDirection) {
            case 'R':
                newWaypoint.x = waypoint.y
                newWaypoint.y = -waypoint.x
                break
            case 'L':
                newWaypoint.x = -waypoint.y
                newWaypoint.y = waypoint.x
                break
        }
        console.log(newWaypoint)
        waypoint = newWaypoint
    }
}

module.exports = contestResponse

// 40977 too low