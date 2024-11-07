let propety = []
let hub = ``
let home = {}
do {
    switch(parseInt(hub)) {
        case 1:
            home = {
                ower: prompt('Nome do dono'),
                rooms: parseInt(prompt('quantidade de quartos')),
                bathrooms: parseInt(prompt('quantidade de banheiros')),
                garage: prompt('Ha garagem')
            }
            let conf = confirm("deseja salvar este imovel")
            if (conf == true) {
                propety.push(home)
            }
            break
        case 2:
            for(let i = 1; i <= propety.length; i++) {
                alert(`dono: ${propety[i - 1].ower}\nquartos: ${propety[i - 1].rooms}\nbanheiros: ${propety[i - 1].bathrooms}\ngaragem: ${propety[i - 1].garage}`)
            }
    }
    hub = prompt(`QUANTIDADE DE IMOVEIS:\n${propety.length}\nOPÇÕES:\n1:Salvar imovel\n2:Listar imoveis\n3:Sair`)
} while (hub != 3)