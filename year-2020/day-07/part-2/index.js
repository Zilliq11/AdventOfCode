const contestResponse = input => {
    let result = 0 // number of colors that can hold a shiny gold bag
    
    let dictionary = {}

    for (const rule of input) {
        let [container, content] = rule.split(' bags contain ')
        dictionary[container] = []
        if (content.includes('no other bags')) {
            continue
        }
        if ((content.match(/,/g) || []).length > 0) {
            content = content.split(', ')
        
            if (content.length > 1) {
                for (let line of content) {
                    line = line.split(' bag')[0]
                    dictionary[container].push({nb: line[0], content: line.slice(2)})
                }
            }
        } else {
            content = content.split(' bag')[0]
            dictionary[container].push({nb: content[0], content: content.slice(2)})
        }
    }

    result = numberOfBagsContainedIn('shiny gold', dictionary)

    return result
}

function numberOfBagsContainedIn (container, dictionary) {
    if (dictionary[container].length === 0) {
        return 0
    }
    let currentValue = 0
    for (const content of dictionary[container]) {
        currentValue += content.nb * numberOfBagsContainedIn(content.content, dictionary)
        currentValue += Number(content.nb)
    }
    return currentValue
}

module.exports = contestResponse