export const CARREGAR_JOGOS = 'CARREGAR_JOGOS'

export function carregarJogos ({ endereco, preco, responsavel }) {
    return {
        type: CARREGAR_JOGOS,        
        endereco,
        preco,
        responsavel
    }
}