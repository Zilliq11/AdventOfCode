const contestResponse = input => {

    function sum( obj ) {
        var sum = BigInt(0);
        for( var el in obj ) {
            if( obj.hasOwnProperty( el ) ) {
                sum += obj[el]
            }
        }
        return sum;
    }

    const byteToInt = byte => {
        let tmpMask = 0;
        let tmpAntiMask = 0;
        [...byte].forEach((bit, index) => {
            if (bit == 1) {
                tmpMask += Math.pow(2, 35 - index)
                tmpAntiMask += Math.pow(2, 35 - index)
            } else {
                if (bit == 'X') {
                    tmpAntiMask += Math.pow(2, 35 - index)
                }
            }
        });
        return [BigInt(tmpMask), BigInt(tmpAntiMask)]
    }

    let mask = 0
    let antiMask = 0
    let dataBus = {}

    for (const instruction of input) {
        console.log('=========================================')
        console.log('instruction', instruction)
        if (instruction.indexOf('mask = ') >= 0) {
            [mask, antiMask] = byteToInt(instruction.slice(7))
            continue
        }

        console.log('mask', mask)
        console.log('antiMask', antiMask)

        let [memIndex, value] = instruction.split('] = ')
        memIndex = memIndex.slice(4)
        console.log('memIndex', memIndex)

        current = BigInt(value) | mask
        current = BigInt(current) & antiMask

        dataBus[memIndex] = current
    
    }

    //console.log(dataBus)

    result = BigInt(sum(dataBus))
    
    return result
}

module.exports = contestResponse