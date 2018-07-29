import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'Jogo'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                <Menu.Item 
                    name='Jogo' 
                    active={activeItem === 'Jogo'} 
                    onClick={this.handleItemClick} />
                <Menu.Item
                    name='Local'
                    active={activeItem === 'Local'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Participante'
                    active={activeItem === 'Participante'}
                    onClick={this.handleItemClick}
                />
                </Menu>
            </div>
        )

    }
}