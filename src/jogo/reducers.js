const stateJogo = {
    quadra01: {
        endereco: 'rua 01',
        preco: 10,
        responsavel: 'joao'
    },
    quadra02: {
        endereco: 'rua 02',
        preco: 20,
        responsavel: 'maria'
    },
    quadra03: {
        endereco: 'rua 03',
        preco: 25,
        responsavel: 'joaquim'
    },
}

export default function calendar (state = stateJogo, action) {
    return state
}