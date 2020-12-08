const contestResponse = input => {
    let result = 0 // number of colors that can hold a shiny gold bag
    let bagsContainingShinyGold = ['shiny gold']
    let newBags = false

    do {
        newBags = false
        for (let rule of input) {
            let [contenant, contenu] = rule.split(' contain ')

            contenant = contenant.split(' bag')[0]

            let numberOfContenus = (contenu.match(/,/g) || []).length

            contenu = contenu.split(', ')

            for (let i = 0;i <= numberOfContenus;i++) {
                let currentContenu = contenu[i].split(' bag')[0].slice(2)

                if (bagsContainingShinyGold.includes(currentContenu)) {
                    if (!bagsContainingShinyGold.includes(contenant)) {
                        bagsContainingShinyGold.push(contenant)
                        newBags = true
                        break
                    }
                }
            }
        }
    } while (newBags)

    result = bagsContainingShinyGold.length - 1
    
    return result
}

module.exports = contestResponse