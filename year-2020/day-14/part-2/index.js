const contestResponse = input => {

    const getFullBinary = decimal => {
        let binaryValue = decimal.toString(2)
        let fullBinaryValue = ''
        for(let i = 0;i < 36 - binaryValue.length;i++) {
            fullBinaryValue += '0'
        }
        fullBinaryValue += binaryValue
        return fullBinaryValue
    }

    const findAllIndexes = (binary, mask) => {
        
        let nbX = mask.match(/X/g).length
        //console.log(nbX)
        //console.log('mask', mask)

        for (let i = 0;i < nbX;i++) {
            let X = mask.indexOf('X')
            //console.log('index of first X', X)
            let newIndexes = []
            for (let index of allIndexes) {
                let tmp = index.slice(0, X)
                tmp += '0'
                tmp += index.slice(X + 1)
                newIndexes.push(tmp)
                //console.log(tmp)

                tmp = index.slice(0, X)
                tmp += '1'
                tmp += index.slice(X + 1)
                newIndexes.push(tmp)
                //console.log(tmp)
            }
            allIndexes = newIndexes
            let tmp = mask
            mask = mask.slice(0, X)
            mask += '1'
            mask += tmp.slice(X+1)            
        }

        return 10
    }

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
    let lastMask
    let allIndexes = []

    for (const instruction of input) {
        allIndexes = []
        //console.log('=========================================')
        //console.log('instruction', instruction)
        if (instruction.indexOf('mask = ') >= 0) {
            lastMask = instruction.slice(7);
            [mask, antiMask] = byteToInt(instruction.slice(7))
            
            continue
        }

        //console.log('mask', mask)
        //console.log('antiMask', antiMask)

        let [memIndex, value] = instruction.split('] = ')
        memIndex = memIndex.slice(4)
        //console.log('memIndex', memIndex)

        startIndex = BigInt(memIndex) | mask
        //console.log('startIndex', startIndex)
        //console.log('startIndex BIN', startIndex.toString(2))
        //console.log(lastMask)

        let fullBinary = getFullBinary(startIndex)
        //console.log(fullBinary)

        allIndexes.push(fullBinary)

        findAllIndexes(fullBinary, lastMask)

        //allIndexes.push(memIndex)

        //console.log(allIndexes)

        for (const memoryIndex of allIndexes) {
            let decimal = parseInt(memoryIndex, 2);
            //console.log('decimal', decimal)
            dataBus[decimal] = BigInt(value)
        }
    }

    //console.log(dataBus)

    result = BigInt(sum(dataBus))
    
    return result
}

module.exports = contestResponse