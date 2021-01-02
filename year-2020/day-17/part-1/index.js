const contestResponse = input => {
    
        let plots = []
        for (let j = -(input.length - 1) / 2;j <= (input.length - 1) / 2;j++) {
            for (let i = -(input[0].length - 1) / 2;i < (input[0].length - 1) / 2;i++) {
                plots.push({x: i, y: j, z: 0, state: input[j][i] === '#'})
            }
        }

        let zRange = 1
        let xRange = 
        
        console.log(plots)
        
        // ajouter un étage vide avant
        // ajouter un etage vide après
        // check le premier étage
        // check pour une valeur
            // sur l'etage du dessous
            // sur le meme etage
            // sur l'etage du dessus
        // ajouter la valeur a la new map
    
    
    
        return 0
    }
    
    module.exports = contestResponse