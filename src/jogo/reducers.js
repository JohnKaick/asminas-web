import { CARREGAR_JOGOS } from "./actions";

const stateJogo = [
    {
        endereco: 'rua 01',
        preco: 10,
        responsavel: 'joao'
    },
    {
        endereco: 'rua 02',
        preco: 20,
        responsavel: 'maria'
    },
    {
        endereco: 'rua 03',
        preco: 25,
        responsavel: 'joaquim'
    },
]

export default function jogos (state = stateJogo, action) {
    const { endereco, preco, responsavel } = action

    switch(action.type) {
        case CARREGAR_JOGOS :
            return {
                ...state,
                endereco,                 
                preco,
                responsavel,
            }
        default:
            return state
    }
}