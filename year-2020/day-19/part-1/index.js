const contestResponse = input => {

    let rules = []
    let samples = []
    let isCurrentLineRule = true
    for (const line of input) {
        if (line === ';') {
            isCurrentLineRule = false
            continue
        }
        if (isCurrentLineRule) {
            let [ruleNb, rule] = line.split(': ')
            rules[ruleNb] = rule
        } else {
            samples.push(line)
        }
    }

    console.log(rules)
    console.log(samples)

    const match = (sample, ruleIndex) => {
        console.log("=====================")
        console.log('sample', sample)
        console.log('ruleIndex', ruleIndex)
        console.log("rule", rules[ruleIndex])
        let rule = rules[ruleIndex]
        if (rule[0] === '"') {
            console.log("rule ===")
            let regex = /[ab]/g
            rule = rule.match(regex)
            console.log('rule letter', rule[0])
            console.log('sample letter', sample[0])
            if (sample[0] == rule[0]) {
                if (sample.length === 1) {
                    console.log('match === LAST')
                    return true
                } else {
                    console.log('match ===')
                    return sample.slice(1)
                }
            }
            console.log('NOT match ===')
            return false
        }

        let matching = false

        rule = rule.split(' | ')
        if (rule.length > 1) {
            console.log("rule |")
            let rule1 = rule[0].split(' ')
            let rule2 = rule[1].split(' ')
            matching = true
            let currentSample = sample
            console.log('rule1', rule1)
            for (const nextRule of rule1) {
                console.log('nextRule', nextRule)
                let test = match(currentSample, nextRule)
                if (!test) {
                    console.log('rule1 match not, break')
                    matching = false
                    break
                }
                currentSample = test
            }

            if (!matching) {
                console.log('rule2', rule2)
                matching = true
                
                currentSample = sample
                for (const nextRule of rule2) {
                    console.log('nextRule', nextRule)
                    let test = match(currentSample, nextRule)
                    if (!test) {
                        console.log('rule2 match not, break')
                        matching = false
                        break
                    }
                    currentSample = test
                }
            }
            if (matching) {
                console.log('rule | match')
                return currentSample
            }
            console.log('rule | match NOT')
            return false
        }

        rule = rule[0].split(' ')

        console.log('rule is finally', rule)

        matching = true

        let currentSample = sample
        for (const nextRule of rule) {
            let test = match(currentSample, nextRule)
            if (!test) {
                console.log('final rule match not, break')
                matching = false
                break
            }
            currentSample = test
        }

        if (matching) {
            return currentSample
        } else {
            return false
        }
    }

    let nbSampleMatching = 0

    //samples = samples.slice(1)

    for (const sample of samples) {
        let test = match(sample, 0)
        
        if (test == true) {
            console.log('retour après boucle complete', sample, 'ok')
            nbSampleMatching++
        } else {
            console.log('retour après boucle complete', sample, 'nop')
        }
        //break
    }

    return nbSampleMatching
}

module.exports = contestResponse