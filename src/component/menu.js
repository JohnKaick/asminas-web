import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react'

export default class extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
        <div>
            <Menu pointing secondary>
            <Menu.Item name='Jogo' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
                name='Local'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='Participante'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
            />
            </Menu>
        </div>
        )

    }
}