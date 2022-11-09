let listaDeBebidas = [
    {
        id: 1,
        nome: 'aguaSemGas',
        qtde: 20,
        valorUnitario: 2.5,
        marca: 'Indaiá',
        sabor: 'Água Mineral Sem Gás'
    },
    {
        id: 2,
        nome: 'aguaComGas',
        qtde: 20,
        valorUnitario: 2.5,
        marca: 'Santa Joana',
        sabor: 'Água Mineral Com Gás'
    }, {
        id: 3,
        nome: 'refrigeranteCola',
        qtde: 8,
        valorUnitario: 5.5,
        marca: 'Pepsi',
        sabor: 'Cola'
    },
    {
        id: 4,
        nome: 'refrigeranteLaranja',
        qtde: 5,
        valorUnitario: 6.5,
        marca: 'Jatobá',
        sabor: 'Laranja'
    },
    {
        id: 5,
        nome: 'refrigeranteTutifrutti',
        qtde: 10,
        valorUnitario: 6,
        marca: 'Rochedo',
        sabor: 'Tutti-frutti'
    },
    {
        id: 6,
        nome: 'refrigeranteLimao',
        qtde: 8,
        valorUnitario: 6.5,
        marca: 'Sprite',
        sabor: 'Limão'
    },
    {
        id: 7,
        nome: 'refrigeranteGuarana',
        qtde: 5,
        valorUnitario: 6,
        marca: 'Frevo',
        sabor: 'Guaraná'
    },
    {
        id: 8,
        nome: 'cerveja',
        qtde: 4,
        valorUnitario: 9,
        marca: 'Nossa',
        sabor: 'Cerveja tipo Pilsen'
    }
]

let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao').addEventListener('click', verMais)

function verificarOpcaoSelecionada(opcoes) {
    let pegarValor = document.querySelector(`input[name='${opcoes}']:checked`);
    let valorDoInput = pegarValor.value
    return valorDoInput
}

function listarOpcoes() {
    let opcaoSelecionada = verificarOpcaoSelecionada('opcoes')

    switch (opcaoSelecionada) {
        case 'aguaSemGas':
            resultado.innerHTML = ` Sabor: ${listaDeBebidas[0].sabor} </br>Preço: R$ ${listaDeBebidas[0].valorUnitario} </br> Marca: ${listaDeBebidas[0].marca}</br> Estoque: ${listaDeBebidas[0].qtde}`
            break; 
        case 'aguaComGas': 
            resultado.innerHTML = ` Sabor: ${listaDeBebidas[1].sabor} </br>Preço: R$ ${listaDeBebidas[1].valorUnitario} </br> Marca: ${listaDeBebidas[1].marca}</br> Estoque: ${listaDeBebidas[1].qtde}`
            break; 
        case 'refrigeranteCola': 
            resultado.innerHTML = ` Sabor: ${listaDeBebidas[2].sabor} </br>Preço: R$ ${listaDeBebidas[2].valorUnitario} </br> Marca: ${listaDeBebidas[2].marca}</br> Estoque: ${listaDeBebidas[2].qtde}`
            break; 
        case 'refrigeranteLaranja': 
            resultado.innerHTML = ` Sabor: ${listaDeBebidas[3].sabor} </br>Preço: R$ ${listaDeBebidas[3].valorUnitario} </br> Marca: ${listaDeBebidas[3].marca}</br> Estoque: ${listaDeBebidas[3].qtde}`
            break; 
        case 'refrigeranteTutifrutti': 
            resultado.innerHTML = ` Sabor: ${listaDeBebidas[4].sabor} </br>Preço: R$ ${listaDeBebidas[4].valorUnitario} </br> Marca: ${listaDeBebidas[4].marca}</br> Estoque: ${listaDeBebidas[4].qtde}`
            break; 
        case 'refrigeranteLimao': 
            resultado.innerHTML = ` Sabor: ${listaDeBebidas[5].sabor} </br>Preço: R$ ${listaDeBebidas[5].valorUnitario} </br> Marca: ${listaDeBebidas[5].marca}</br> Estoque: ${listaDeBebidas[5].qtde}`
            break; 
        case 'refrigeranteGuarana': 
            resultado.innerHTML = ` Sabor: ${listaDeBebidas[6].sabor} </br>Preço: R$ ${listaDeBebidas[6].valorUnitario} </br> Marca: ${listaDeBebidas[6].marca} </br> Estoque: ${listaDeBebidas[6].qtde}`
            break; 
        case 'cerveja': 
            resultado.innerHTML = ` Sabor: ${listaDeBebidas[7].sabor} </br>Preço: R$ ${listaDeBebidas[7].valorUnitario} </br> Marca: ${listaDeBebidas[7].marca} </br> Estoque: ${listaDeBebidas[7].qtde}`
            break;
        default:
    }
    return
}

function verMais(event, listaDeBebidas) {
    event.preventDefault()
    listarOpcoes(listaDeBebidas)
    return
}


