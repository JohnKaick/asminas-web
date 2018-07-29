import { connect } from 'react-redux'

import { carregarJogos } from './actions'

function mapStateToProps (state) {
    return {
        jogos: state.jogos
    }
}

function mapDispachToProps (dispatch) {
    return {
        carregarJogos: () => {
            dispatch(carregarJogos())
        }
    }
}

export default (container) => {
    return connect(mapStateToProps, mapDispachToProps)(container)
}